import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCorrect, DialogIncorrect } from '../dialogsTs/dialogs.component';

interface Rol {
  value: number;
  viewValue: string;
}
export interface DataWorker {
  email: string;
  password: string;
  admin: boolean;
  userRol:number;
}

// dialogo para actualizar ususario
@Component({
  templateUrl: './dialogUpdateWorker.component.html',
  styleUrls: ['./dialogUpdateWorker.component.css']
})
export class DialogUpdateWorker implements OnInit {
  formWorkerUpdate !: FormGroup;

  constructor(
    public dialogRef : MatDialogRef<DialogUpdateWorker>,
    @Inject(MAT_DIALOG_DATA) public data: DataWorker,
    private formBuilder : FormBuilder,
    private RestService:RestService,
    public dialog: MatDialog,

    ) {}
  onNoClick(): void {this.dialogRef.close();}
  hide = true;
  roles: Rol[] = [
    {value: 1, viewValue: 'Administrador'},
    {value: 2, viewValue: 'Cocinero'},
    {value: 3, viewValue: 'Mesero'},
  ];

  ngOnInit(): void {
    this.formWorkerUpdate = this.formBuilder.group({
      email:['',  [Validators.required, Validators.email ] ],
      password:['', [Validators.required, Validators.minLength(6) ]],
      admin:['',],
      userRol:['', Validators.required],
    });
    this.formWorkerUpdate.valid;
  }

  // validación de inputs
  get emailField(){ return this.formWorkerUpdate.get('email') }
  get passwordField(){ return this.formWorkerUpdate.get('password') }

  // conexión con clases para mostrar dialogos
  openDialogCorrect(): void {const dialogRef = this.dialog.open(DialogCorrect , {});}
  openDialogIncorrect(): void {const dialogRef = this.dialog.open(DialogIncorrect, {});}

  // actualizando usuario
    public saveNewDataUser(element:any){
      console.log(element, "----------------");
      if(element.userRol===1){
        this.formWorkerUpdate.value.admin=true;
      }else{ this.formWorkerUpdate.value.admin=false; }
      console.log(element)
     this.updateWorker(element.id, this.formWorkerUpdate.value)
     }
    public updateWorker(id: number, data:any){
       this.RestService .put('users', data,id)
       .subscribe({
         next: data => {this.openDialogCorrect();},
         error: error => {this.openDialogIncorrect();}
      })
    }


}
