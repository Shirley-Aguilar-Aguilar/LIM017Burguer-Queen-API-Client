import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// creación de templates de dialogos
@Component({
  templateUrl: '../dialog.component.html',
  styleUrls: ['../dialog.component.css']
})
export class DialogData {
  constructor( public dialogRef: MatDialogRef<DialogData>,) {}
  onNoClick(): void {this.dialogRef.close();}
}

@Component({
  templateUrl: '../dialogcorrect.component.html',
  styleUrls: ['../dialog.component.css']
})
export class DialogCorrect {
  constructor( public dialogRef: MatDialogRef<DialogCorrect>,) {}
  onNoClick(): void {
    this.dialogRef.close();
    window.location.reload();
  }
}

@Component({
  templateUrl: '../dialogincorrect.component.html',
  styleUrls: ['../dialog.component.css']
})
export class DialogIncorrect {
  constructor( public dialogRef : MatDialogRef<DialogIncorrect>,) {}
  onNoClick(): void {this.dialogRef.close();}
}

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


// dialogo para crear ususario
@Component({
  templateUrl: '../updateDialogs/dialogUpdateWorker.component.html',
  styleUrls: ['../updateDialogs/dialogUpdateWorker.component.css']
})
export class DialogUpdateWorker implements OnInit {
  formWorkerUpdate !: FormGroup;

  constructor(
    public dialogRef : MatDialogRef<DialogUpdateWorker>,
    @Inject(MAT_DIALOG_DATA) public data: DataWorker,
    private formBuilder : FormBuilder,

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
      email:['', Validators.required],
      password:['', Validators.required],
      admin:['',],
      userRol:['', Validators.required],

    })
  }

}

