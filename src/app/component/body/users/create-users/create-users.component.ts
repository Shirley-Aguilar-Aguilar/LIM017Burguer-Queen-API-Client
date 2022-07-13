import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

interface Rol {
  value: number;
  viewValue: string;
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
    private formBuilder: FormBuilder
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
      admin:['',[Validators.required]],
      userRolId:['',[Validators.required]]
    });
    this.formCreateUser.valid;
  }



  save(event:Event) {
    event.preventDefault();
    if(this.formCreateUser.valid){
      console.log("this.formCreateUser");
      console.log(this.formCreateUser.value);

      // this.createUser(this.formCreateUser.value)
    } else {
      this.formCreateUser.markAllAsTouched();
    }
  }

   // validación de inputs
   get emailField(){ return this.formCreateUser.get('email') }
   get passwordField(){ return this.formCreateUser.get('password') }
   get nameField(){ return this.formCreateUser.get('name') }

   public clear(){
    this.formCreateUser.reset()
   }


/*   public createUser(data:any){
    this.RestService.postUser(data)
    .subscribe({
      next: data => {
        console.log("datapostuser");
         console.log(data);
         this.formCreateUser.reset();
      },
      error: error => {
        this.error = true;
        console.log(JSON.stringify(error.error.message));
      }
    })
  } */

}
