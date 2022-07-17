import { Component, OnInit } from "@angular/core";
import { ref, Storage, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-view-users',
  templateUrl: './createDialogsProducts.component.html',
  styleUrls: ['./createDialogsProducts.component.css']
})

export class createDialogsProducts implements OnInit {

  constructor(private storage: Storage,){}
  ngOnInit(): void {}
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
    .then(response => {console.log(response)})
    .catch(error => {console.log("listAll"+error)})
  }

}
