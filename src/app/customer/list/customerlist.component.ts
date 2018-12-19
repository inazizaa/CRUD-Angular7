import { Component, OnInit, Input, EventEmitter,Output, ViewChild } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service'
import { CustomerformComponent } from '../form/customerform.component';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
@ViewChild('formCustomer')
formCustomer: CustomerformComponent; //membuat variabel dengan nama sesuai komponennya

  listCustomer: Customer[] = [];
  showDetail: boolean = false;
  selectedCustomer: Customer = new Customer();


  constructor(private customerService: CustomerService ) {}

  ngOnInit() {
    this.loadData();
  }

  selectCustomer(customer: Customer){
    let copyCustomer = new Customer();
    copyCustomer.customerNumber = customer.customerNumber;
    copyCustomer.firstName = customer.firstName;
    copyCustomer.lastName = customer.lastName;
    copyCustomer.birthDate = customer.birthDate;
    copyCustomer.username = customer.username;
    copyCustomer.password = customer.password;
    copyCustomer.phoneNumber = customer.phoneNumber;
    copyCustomer.phoneType= customer.phoneType;
    this.selectedCustomer = customer;
    this.showDetail = true;
    this.formCustomer.updateData();
  }

  loadData() {
    this.customerService.getList().subscribe((response)=>{
      console.log(JSON.stringify(response));
      Object.assign(this.listCustomer, response);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
  
  delete(customerNumber) {
    this.customerService.delete(customerNumber).subscribe(
      (response)=>{
     // console.log(JSON.stringify(response));
    location.href = '/customerlist'
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }

prosesResult(result){
  if(result){
    this.showDetail=false;
    this.loadData();
  }
}
}

