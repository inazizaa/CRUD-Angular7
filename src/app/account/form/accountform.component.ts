import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../account';
import { AccountService} from '../account.service';

@Component({
  selector: 'app-accountform',
  templateUrl: './accountform.component.html',
  styleUrls: ['./accountform.component.css']
})
export class AccountformComponent implements OnInit {
@Input() account : Account;
@Output()
result = new EventEmitter();

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  submitData(){
    this.accountService.update(this.account).subscribe(
    (response)=>{
    console.log(JSON.stringify(response));
    this.result.emit(true);
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
   );
  }

  addData(){
    this.accountService.update(this.account).subscribe(
    (response)=>{
    console.log(JSON.stringify(response));
    this.result.emit(true);
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
   );
  } 

  cancelChanges(){
    this.result.emit(true);
  }
}
