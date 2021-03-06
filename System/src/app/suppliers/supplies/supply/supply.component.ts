import { Component, OnInit } from '@angular/core';
import { SuppliesService } from "../../../shared/supplies.service";
import { OrderTypesService } from "../../../shared/order-types.service";
import { NotificationService } from "src/app/shared/notification.service";
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {

  constructor(public service: SuppliesService,
    public ordType : OrderTypesService,
    public notificationService : NotificationService,
    public dialogRef: MatDialogRef <SupplyComponent> ) { }


    ngOnInit() {
      this.service.getSupply();
    }
  
  
  
    onClear() {
      this.service.form.reset();
      this.service.initializeFormGroup();
  
    }
  
    onSubmit(){
      if(this.service.form.valid){
        if (!this.service.form.get('$key').value)
        this.service.insertSupply(this.service.form.value)
        else
        this.service.updateSupply(this.service.form.value);
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
  
    demo(){

      this.service.form.setValue({
  
        $key:null,

        XS :'',
        S : 10,
        M :10,
        L : 20,
        XL : 50,
        XXL : 20,
        BrandName : 'Adidas Shoes',
        oDate:'',
        payment:30000,
      })
    }
  
  }
  
