import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCorrect, DialogData, DialogIncorrect } from '../../dialogs/dialogsTs/dialogs.component';
import { DialogUpdateWorker } from '../../dialogs/updateDialogsWorker/dialogUpdateWorker.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
/*   public listWorkers:any = [];
  dataSource = this.listWorkers; */
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'name','email', 'rol','update', 'delete'];
  error: boolean = false;

  constructor(
    private RestService:RestService,
    public dialog: MatDialog
    ) {  }


  ngOnInit(): void {
    this.getWorkers();
  }

  public getWorkers() {
    this.RestService.get('users')
    .subscribe((data) =>  {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // conexión con clases para mostrar dialogos
  openDialogCorrect(): void {const dialogRef = this.dialog.open(DialogCorrect , {});}
  openDialogIncorrect(): void {const dialogRef = this.dialog.open(DialogIncorrect, {});}


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


  openDialogUpdate(element:any): void {
    const dialogRef = this.dialog.open(DialogUpdateWorker , {
      data: {id:element.id, email : element.email, password : element.password, admin : element.admin, userRol : element.userrol.id,}
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

}


