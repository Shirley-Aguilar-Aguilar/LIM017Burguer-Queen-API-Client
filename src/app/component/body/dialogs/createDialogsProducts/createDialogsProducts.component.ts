import { Component, Inject, OnInit } from "@angular/core";
import { ref, Storage, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RestService } from "src/app/services/rest.service";
import { DialogCorrect, DialogIncorrect } from "../dialogsTs/dialogs.component";

export interface DataProduct {
  id: string;
  name: string;
  price: number;
  image:string;
  type:string;
}

@Component({
  selector: 'app-view-users',
  templateUrl: './createDialogsProducts.component.html',
  styleUrls: ['./createDialogsProducts.component.css']
})

export class createDialogsProducts implements OnInit {
  url!:string;
  formCreateProduct!: FormGroup;
  error!:string;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DataProduct,
    private storage: Storage,
    private RestService: RestService,
    public dialogRef : MatDialogRef<createDialogsProducts>,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,){}

    // onNoClick(): void {this.dialogRef.close();}

  ngOnInit(): void {
    this.formCreateProduct = this.formBuilder.group({
      name:['', [Validators.required]],
      price: ['', [Validators.required] ],
      image: ['',],
      type:['',[Validators.required]],
    });
    this.formCreateProduct.valid;
  }

   // conección de firebase
   uploadImage($event : any) {
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage,`products/${file.name}`);
    uploadBytes(imgRef, file)
    .then(response => {
      console.log(response)
      this.getImages(file.name)}
      )
    .catch(error => console.log("upload"+error))
  }

  getImages(file:string) {
    const imagesRef = ref(this.storage, `products/${file}`);
    getDownloadURL(imagesRef)
    .then(response => {this.formCreateProduct.value.image=response, this.url=response})
    .catch(error => {console.log("listAll"+error)})
  }


  // validación de inputs
  get nameField(){ return this.formCreateProduct.get('name') }
  get priceField(){ return this.formCreateProduct.get('price') }
  get imageField(){ return this.formCreateProduct.get('image') }
  get typeField(){ return this.formCreateProduct.get('type') }

  // conexión con clases para mostrar dialogos
  openDialogCorrect(): void {const dialogRef = this.dialog.open(DialogCorrect , {});}
  openDialogIncorrect(): void {const dialogRef = this.dialog.open(DialogIncorrect , {});}

  public save(){
    if(this.formCreateProduct.value.image==""){
      this.formCreateProduct.value.image= this.url;
    }
    console.log(this.formCreateProduct.value.image)
    if(this.formCreateProduct.valid && this.formCreateProduct.value.image!==(null||undefined) ){
     // this.formCreateProduct.value.image= this.url;
     console.log(this.formCreateProduct.value)
     this.createProduct(this.formCreateProduct.value)
    }else{
      this.openDialogIncorrect;
    }
  }

  public createProduct(data:any){
     this.RestService.post('products', data)
     .subscribe({
      next: data => {
        console.log("datapostproduct");
         console.log(data);
         this.openDialogCorrect();
         this.formCreateProduct.reset();
      },
      error: error => {
        console.log(JSON.stringify(error.error));
        this.openDialogIncorrect()
      }
    })
  }

  public update(data:any){
    this.RestService.post('products', data)
    .subscribe({
     next: data => {
       console.log("datapostproduct");
        console.log(data);
        this.openDialogCorrect();
        this.formCreateProduct.reset();
     },
     error: error => {
       console.log(JSON.stringify(error.error));
       this.openDialogIncorrect()
     }
   })
 }


}
