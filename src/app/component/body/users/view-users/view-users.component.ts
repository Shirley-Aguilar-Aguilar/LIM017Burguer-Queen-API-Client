import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCorrect, DialogData, DialogIncorrect, DialogUpdateWorker } from '../../dialogs/dialogsTs/dialogs.component';


@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  public listWorkers:any = [];
  dataSource = this.listWorkers;
  displayedColumns: string[] = ['id', 'name','email', 'password', 'rol','update', 'delete'];
  error: boolean = false;

  constructor(
    private RestService:RestService,
    public dialog: MatDialog
    ) {  }


  ngOnInit(): void {
    this.getWorkers();
  }
  public getWorkers() {
    this.RestService.get('users')
    .subscribe((response) =>  this.dataSource = response)
  }

  // conexión con clases para mostrar dialogos
  openDialogCorrect(): void {const dialogRef = this.dialog.open(DialogCorrect , {});}
  openDialogIncorrect(): void {const dialogRef = this.dialog.open(DialogIncorrect, {});}


  // dialogos al usar el verbo delete
  openDialog(id:number): void {
    const dialogRef = this.dialog.open(DialogData , {});
    dialogRef.afterClosed().subscribe(result => {
      if(result){this.deleteWorker(id);}
    });
  }


  // eliminando usuario
  public deleteWorker(id: number){
    this.RestService.delete('users', id)
    .subscribe({
      next: data => {this.openDialogCorrect()},
      error: error => {this.openDialogIncorrect();}
    })
  }


  openDialogUpdate(element:any): void {
    const dialogRef = this.dialog.open(DialogUpdateWorker , {
      data: {email : element.email, password : element.password, admin : element.admin, userRol : element.userrol.id,}
    }

      );
    dialogRef.afterClosed().subscribe(result => {
      //if(result){this.deleteWorker(id);}
    });
  }
  // actualizando usuario
  public updateUser(element:any){
    console.log(element.id);
    console.log(element);
   }
   public updateWorker(id: number, data:any){
     this.RestService.put('users', data,id)
     .subscribe({
       next: data => {this.openDialogCorrect();},
       error: error => {this.openDialogIncorrect();}
     })
   }


}


