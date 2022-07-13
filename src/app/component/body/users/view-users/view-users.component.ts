import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  delete: boolean;
}
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
    private formBuilder: FormBuilder,
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
  openDialogIncorrect(): void {const dialogRef = this.dialog.open(DialogIncorrect , {});}


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



}

// creación de templates de dialogos
@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styles: [`

    :host {
      border:0;
      font-size:20px;
      text-align:center;
      border-radius: 8px;
      font-family: 'Patua One', cursive;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      box-shadow:3px 3px 3px gray;
      padding:5%;
      font-family: 'Patua One', cursive;
    }
    h1{ font-family: 'Patua One', cursive;font-size:20px;}
    button{
      background-color:black;
      color:white;
      font-size:15px;
    }
    button:hover{background-color:red;}
  `]
})
export class DialogData {
  constructor( public dialogRef: MatDialogRef<DialogData>,) {}
  onNoClick(): void {this.dialogRef.close();}
}

@Component({
  selector: 'dialog-correct',
  templateUrl: './dialogcorrect.component.html',
  styles: [`
    :host {
      display: block;
      border:0;
      font-size:20px;
      text-align:center;
      border-radius: 8px;
      font-family: 'Patua One', cursive;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      padding:5%;
    }
    button {
      background-color:black;
      color:white;
      font-size:15px;
    }
    button:hover{background-color:red;}
  `]
})
export class DialogCorrect {
  constructor( public dialogRef: MatDialogRef<DialogCorrect>,) {}
  onNoClick(): void {
    this.dialogRef.close();
    window.location.reload();
  }
}

@Component({
  selector: 'dialog-incorrect',
  templateUrl: './dialogincorrect.component.html',
  styles: [`
    :host {
      display: block;
      border:0;
      font-size:20px;
      text-align:center;
      border-radius: 8px;
      font-family: 'Patua One', cursive;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    }
    button{
      background-color:black;
      color:white;
      font-size:15px;
    }
    button:hover{background-color:red;}
  `]
})
export class DialogIncorrect {
  constructor( public dialogRef : MatDialogRef<DialogIncorrect>,) {}
  onNoClick(): void {this.dialogRef.close();}
}



