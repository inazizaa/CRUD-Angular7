import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { Account } from '../account';
import { AccountService} from '../account.service'


@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {
  listAccount: Account[] = [];
  showDetail: boolean = true;
  selectedAccount: Account = new Account();


  constructor(private accountService: AccountService ) { }

  ngOnInit() {
    this.loadData();
  }

  selectAccount(account: Account){
    let copyAccount = new Account();
    copyAccount.accountNumber = account.accountNumber;
    copyAccount.openDate = account.openDate;
    copyAccount.balance = account.balance;
    copyAccount.customer = account.customer;
    this.selectedAccount = account;
    this.showDetail = true;
  }

  loadData() {
    this.accountService.getList().subscribe((response)=>{
      console.log(JSON.stringify(response));
      Object.assign(this.listAccount, response);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
  
  delete(accountNumber) {
    this.accountService.delete(accountNumber).subscribe(
      (response)=>{
     // console.log(JSON.stringify(response));
    location.href = '/accountlist'
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