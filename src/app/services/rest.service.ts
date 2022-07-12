import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public host:string = environment.urlBurguerQueen
  token = sessionStorage.getItem('token');
  constructor(private http: HttpClient) { }
  httpOptions = () => (
    { headers: new HttpHeaders (
        {
          'Content-Type': 'application/json',
          'access-token': `${this.token!.replace(/['"]+/g, '')}`,
        })
    });

  public login(email: string, password: string){
    return this.http.post<any>(`${environment.urlBurguerQueen}/auth`, {email, password});
  }

  public getUserById(id:number){
    return this.http.get<any>(`${environment.urlBurguerQueen}/users/${id}`, this.httpOptions());
  }

  public getUsers(){
    return this.http.get<any>(`${environment.urlBurguerQueen}/users`, this.httpOptions());
  }

  public postUser(data:any){
    return this.http.post<any>(`${environment.urlBurguerQueen}/users`,data, this.httpOptions());
  }

  public putUser(id:number){
    const headers = new HttpHeaders().set('access-token',this.token!.replace(/['"]+/g, ''));
    return this.http.put<any>(`${environment.urlBurguerQueen}/users/${id}`, {headers});
  }

}
