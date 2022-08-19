import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


// creación de templates de dialogos de avisos generales
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


