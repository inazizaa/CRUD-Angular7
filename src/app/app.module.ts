import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerformComponent } from './customer/form/customerform.component';
import { HttpClientModule} from '@angular/common/http';
import { CustomerlistComponent } from './customer/list/customerlist.component';
import { CustomerService } from './customer/customer.service';
import { AccountComponent } from './account/account.component';
import { AccountformComponent } from './account/form/accountform.component';
import { AccountlistComponent } from './account/list/accountlist.component';
import { AccountService} from './account/account.service';
import { EnigmaPipe } from './shared/enigma.pipe';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionformComponent } from './transaction/form/transactionform.component';
import { TransactionlistComponent } from './transaction/list/transactionlist/transactionlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerformComponent,
    CustomerlistComponent,
    AccountComponent,
    AccountformComponent,
    AccountlistComponent,
    EnigmaPipe,
    TransactionComponent,
    TransactionformComponent,
    TransactionlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CustomerService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
