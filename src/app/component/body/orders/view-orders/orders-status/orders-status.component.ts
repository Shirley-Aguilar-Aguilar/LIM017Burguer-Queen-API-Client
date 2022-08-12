import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-orders-status',
  templateUrl: './orders-status.component.html',
  styleUrls: ['./orders-status.component.css']
})
export class OrdersStatusComponent implements OnInit {

 orders:any;
 totalPrice:number=0;
  constructor(public RestService: RestService) { }

  ngOnInit(): void {
    this.getStatusOrder();
  }

  getPriceTotal(data:any){
    data.map((order:any) => {
      let sum = 0;

      const pricePerProduct =  order.ordersproducts.map((product:any) => {
          return product.quantity*product.product.price;
      })

      for (let i = 0; i < pricePerProduct.length; i++) {
          sum += pricePerProduct[i];
      }
      order.newTotal = sum;

    })
  }

  public getStatusOrder(){
    this.RestService.get('getAllOrders')
    .subscribe({
      next: data => {
        console.log(data);
        const priceTotal =this.getPriceTotal(data);
        this.orders = data;
      },
      error: error => {
        console.log(error)
      }
    })
  }

  addPrice(){
    console.log("this.", this.totalPrice)
  }

}
