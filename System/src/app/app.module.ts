import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { SuppliersService } from './shared/suppliers.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import {MatExpansionModule} from '@angular/material/expansion';
import { environment } from "../environments/environment";
import { OrderTypesService } from "./shared/order-types.service";
import { PromoComponent } from './promo/promo.component';
import { PromoListComponent } from './promo/promo-list/promo-list.component';
import { PromocodeComponent } from './promo/promocode/promocode.component';
import { PromoService } from './shared/promo.service';

import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { TailoringsComponent } from './tailorings/tailorings.component';
import { TailoringComponent } from './tailorings/tailoring/tailoring.component';

import { DatePipe } from '@angular/common';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { DepartmentService } from './shared/department.service';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

import { SuppliesComponent } from './suppliers/supplies/supplies.component';
import { SuppliesService } from "./shared/supplies.service";
import { SupplyComponent } from './suppliers/supplies/supply/supply.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderReportComponent } from './orders/order-report/order-report.component';
import { OrderService } from './shared/order.service';

import { SizesService } from './shared/sizes.service';
import {ProductComponent} from './products/product/product.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductStockComponent} from './products/product-stock/product-stock.component';
import {ProductStockListComponent} from './products/product-stock-list/product-stock-list.component';
import { NotificationService } from './shared/notification.service';
import { EmployeeService } from './shared/employee.service';
import { ProductService } from './shared/product.service';
// import { PromoService } from './shared/promo.service';

import { StockService } from './shared/stock.service';
import { DeliveryAllocateRiderComponent } from './delivery/delivery-allocate-rider/delivery-allocate-rider.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryReportComponent } from './delivery/delivery-report/delivery-report.component';
import { DeliveryRiderListComponent } from './delivery/delivery-rider-list/delivery-rider-list.component';
import { DeliveryAddService } from './shared/delivery-add.service';
import { DeliveryService } from './shared/delivery.service';
import { ProductsComponent } from './products/products.component';
import { UploadComponent } from './suppliers/supplies/supply/upload/upload.component';
import { DeliveryAddRiderComponent } from './delivery/delivery-add-rider/delivery-add-rider.component';
import { TailoringService } from "./shared/tailoring.service";
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerService } from './shared/customer.service';
import { TailoringListComponent } from './tailorings/tailoring-list/tailoring-list.component';
// import { ReportComponent } from './suppliers/report/report.component';
// import { PaymentReportComponent } from './suppliers/report/payment-report/payment-report.component';

import { SalaryComponent } from './salaryemployee/salary/salary.component';
import { SalaryslipComponent } from './salaryemployee/salaryslip/salaryslip.component';
import { SalaryemployeeComponent } from './salaryemployee/salaryemployee.component';
import { SalaryService } from './shared/salary.service';



import { ReportComponent } from './suppliers/report/report.component';
import { PaymentReportComponent } from './suppliers/report/payment-report/payment-report.component';
import { QuantityReportComponent } from './suppliers/report/quantity-report/quantity-report.component';
import { TrendingComponent } from './trending/trending.component';
import { TrendingReportComponent } from './trending/trending-report/trending-report.component';


@NgModule({
 
   declarations: [
      AppComponent,
      SuppliersComponent,
      ProductListComponent,
      ProductStockComponent,
      ProductStockListComponent,
      SupplierComponent,
      OrdersComponent,
      OrderReportComponent,
      SupplierListComponent,
      EmployeesComponent,
      EmployeeComponent,
      EmployeeListComponent,
      DeliveryAddRiderComponent,
      DeliveryAllocateRiderComponent,
      DeliveryComponent,
      DeliveryReportComponent,
      DeliveryRiderListComponent,
      ProductComponent,
      ProductsComponent,
      PromoComponent,
      PromoListComponent,
      PromocodeComponent,
      UploadComponent,
      SalaryComponent,
      SalaryslipComponent,
      SalaryemployeeComponent,
      TailoringsComponent,
      TailoringComponent,
      CustomerComponent,
      CustomerListComponent,
      TailoringListComponent,
      TrendingComponent,
      TrendingReportComponent,
   
      MatConfirmDialogComponent,
     
      SuppliesComponent,
    
      SupplyComponent,
    
      ReportComponent,
    
      PaymentReportComponent,
    
      QuantityReportComponent,
      ReportComponent,
    
   ],
   imports: [
      BrowserModule,
      MatSliderModule,
      AppRoutingModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MaterialModule,
      FormsModule,
      MatDialogModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      MatExpansionModule,
      AngularFireModule.initializeApp(environment.firebaseConfig)
   ],
   providers: [
      SuppliersService,
      OrderTypesService,
      OrderService,
      DatePipe,
      DepartmentService,
      SuppliesService,
      DeliveryAddService,
      DeliveryService,
      NotificationService,
      EmployeeService,
      ProductService,
      PromoService,

      StockService,
      SalaryService,
      
      TailoringService,
      SizesService,
      CustomerService

   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      SupplierComponent,

      DeliveryAddRiderComponent,
      SalaryComponent,
      DeliveryAllocateRiderComponent,
   
      EmployeeComponent,

      ProductStockComponent,
      ProductStockListComponent,
      ProductComponent,
      PromoComponent,
      PromocodeComponent,
    
      MatConfirmDialogComponent,
      TailoringComponent,
      SupplyComponent,
      UploadComponent,
      ReportComponent,
      PaymentReportComponent,
      QuantityReportComponent,
   ],


     
})
export class AppModule { }
