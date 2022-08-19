import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // variables declaradas
  loginForm!: FormGroup ;
  error: boolean = false;
  messageError!:string;
  hide=true;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private RestService: RestService ,) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  // obtener y validar datos del formulario
  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email ], [] ],
      password: ['', [Validators.required, Validators.minLength(6) ] ],
    });

    this.loginForm.valid;
  }
  // guardando datos de autenticacion
  save(event:Event) {
    event.preventDefault();
    if(this.loginForm.valid){
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      console.log(this.loginForm.value);
      this.postAuthenticated(this.loginForm.value)
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get emailField(){
    return this.loginForm.get('email')
  }

  get passwordField(){
    return this.loginForm.get('password')
  }

  // authenticación -usando POST AUTH  de la api rest
  public postAuthenticated(dataUser:any){
    this.RestService.post('auth', dataUser)
    .subscribe({
      next: data => {
        sessionStorage.setItem('token',  JSON.stringify(data.accessToken).replace(/['"]+/g, ''));
        sessionStorage.setItem('name',  JSON.stringify(data.name).replace(/['"]+/g, ''));
        sessionStorage.setItem('userId', JSON.stringify(data.id).replace(/['"]+/g, ''));

        this.router.navigate(['/body']);
      },
      error: error => {
        this.error = true;
      }
    })

  }

  public clear(){
   this.loginForm.reset()
  }

}
