import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest.service';
import { createDialogsProducts } from '../../dialogs/createDialogsProducts/createDialogsProducts.component';
import { DialogCorrect, DialogData, DialogIncorrect } from '../../dialogs/dialogsTs/dialogs.component';
import { updateDialogsProducts } from '../../dialogs/updateDialogsProducts/updateDialogsProducts.component';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  formCreateOrder! : FormGroup;
  public listProducts:any = [];

  constructor(
    public RestService:RestService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void { this.getProducts();}

    // conexión con clases para mostrar dialogos
    openDialogCorrect(): void {const dialogRef = this.dialog.open(DialogCorrect , {});}
    openDialogIncorrect(): void {const dialogRef = this.dialog.open(DialogIncorrect , {});}

  public getProducts(){
    this.RestService.get('products')
    .subscribe({
      next: data => {
        console.log("products");
         console.log(data);
         this.listProducts=data;
      },
      error: error => {
        this.openDialogIncorrect()
      }
    })
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(createDialogsProducts , {
    });
  dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogUpdate(product:any): void {
    const dialogRef = this.dialog.open(updateDialogsProducts , {
      data: {id:product.id, name:product.name, price : product.price, image : product.image, type : product.type,}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  // dialogo previo antes de eliminar
  openDialog(id:number): void {
    const dialogRef = this.dialog.open(DialogData , {});
    dialogRef.afterClosed().subscribe(result => {
      if(result){this.deleteProduct(id);}
    });
  }

  // eliminando producto
  public deleteProduct(id: number){
    this.RestService.delete('products', id)
    .subscribe({
      next: data => {this.openDialogCorrect()},
      error: error => {this.openDialogIncorrect();}
    })
  }

}
