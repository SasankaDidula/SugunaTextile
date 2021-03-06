import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/shared/product.service';
import { OrderTypesService } from "src/app/shared/order-types.service";
import { NotificationService } from "src/app/shared/notification.service";
import { SizesService } from "src/app/shared/sizes.service";
import { DatePipe } from '@angular/common';
import { ProductsComponent } from '../products.component';
import { CategoryService } from 'src/app/shared/category.service';
import { SuppliersService } from "src/app/shared/suppliers.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  constructor(public service: ProductService,
    public catType : CategoryService,
    public sizesService : SizesService,
    public datePipe: DatePipe,
    public supplierService : SuppliersService,
    public notificationService : NotificationService,
    public dialogRef:MatDialogRef<ProductsComponent>) {}


    ngOnInit() {
      this.service.getProducts();
    }

    onClear() {
      this.service.form.reset();
      this.service.initializeFormGroup();
  
    }

    onSubmit(){
      if(this.service.form.valid){
        if (!this.service.form.get('$key').value)
        this.service.insertProduct(this.service.form.value)
        
        else
        this.service.updateProduct(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success(':: Submitted Succesfully' );
        this.onClose();
      }
  
    }

    onClose() {
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.dialogRef.close();
    }

    demo() {
      this.service.form.setValue({
        $key: null,
        title: 'Black T-Shirt',
        price: '2500',
        category: '',
        sizes: '',
        quantity: '10',
        imageUrl: 'https://cdn.clipart.email/df7b40cbedeabb79a74a89d006bb1c3d_cute-universe-drawing-t-shirt-kiss-me-bang-bang_800-800.jpeg',
        date: '22.05.2020',
      })
    }
}
