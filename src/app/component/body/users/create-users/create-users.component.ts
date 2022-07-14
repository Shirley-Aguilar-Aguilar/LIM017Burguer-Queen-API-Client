import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest.service';
import { DialogCorrect, DialogIncorrect } from '../../dialogs/dialogsTs/dialogs.component';

interface Rol {
  value: number;
  viewValue: string;
}

export interface DialogData {
  delete: boolean;
}
@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  hide = true;

  constructor(
    private RestService: RestService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
  ) { this.buildForm(); }

  ngOnInit(): void {
  }

  formCreateUser! : FormGroup;
  error: boolean = false;
  roles: Rol[] = [
    {value: 1, viewValue: 'Administrador'},
    {value: 2, viewValue: 'Cocinero'},
    {value: 3, viewValue: 'Mesero'},
  ];

  private buildForm() {
    this.formCreateUser = this.formBuilder.group({
      name:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email ] ],
      password: ['', [Validators.required, Validators.minLength(6) ] ],
      admin:['',],
      userRolId:['',[Validators.required]]
    });
    this.formCreateUser.valid;
  }

  // validación de inputs
  get emailField(){ return this.formCreateUser.get('email') }
  get passwordField(){ return this.formCreateUser.get('password') }
  get nameField(){ return this.formCreateUser.get('name') }

  save(event:Event) {
    event.preventDefault();
    if(this.formCreateUser.valid){
      if(this.formCreateUser.value.userRolId === 1){
        this.formCreateUser.value.admin = true
      }else {this.formCreateUser.value.admin = false};
      console.log("this.formCreateUser");
      console.log(this.formCreateUser.value);
      this.createUser(this.formCreateUser.value)
    } else {
      this.formCreateUser.markAllAsTouched();
    }
  }


   public clear(){this.formCreateUser.reset()}

    // conexión con clases para mostrar dialogos
    openDialogCorrect(): void {const dialogRef = this.dialog.open(DialogCorrect , {});}
    openDialogIncorrect(): void {const dialogRef = this.dialog.open(DialogIncorrect , {});}

  public createUser(dataUser:any){
    this.RestService.post('users',dataUser)
    .subscribe({
      next: data => {
        console.log("datapostuser");
         console.log(data);
         this.openDialogCorrect();
         this.formCreateUser.reset();
      },
      error: error => {
        this.error = true;
        console.log(JSON.stringify(error.error));
        this.openDialogIncorrect()
      }
    })
  }

}
