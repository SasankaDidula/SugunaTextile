import { Component, OnInit, ViewChild } from '@angular/core';
import { StockService } from 'src/app/shared/stock.service';
import { MatSort} from '@angular/material/sort';
import {  MatPaginator } from '@angular/material/paginator';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-product-stock-list',
  templateUrl: './product-stock-list.component.html',
  styleUrls: ['./product-stock-list.component.css']
})
export class ProductStockListComponent implements OnInit {

  constructor(private stockService : StockService,
    public dialogRef: MatDialogRef <ProductStockListComponent>) { }

  listData: MatTableDataSource<any>;

  displayedColumns: string[] =['index','supplier','quantity','date'];

  @ViewChild(MatSort,{static: true}) sort: MatSort;
      @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.stockService.getStockDetail().subscribe(
      list => {
        let array = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      }
    );
  }

  onClose() {
    this.dialogRef.close();
  }

}
