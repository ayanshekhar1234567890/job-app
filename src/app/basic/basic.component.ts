import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { encryptData } from './Encryption';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  constructor(private http: HttpClient) {
  }

  buyBasic(name: string, email: string, card_number: string, card_exp_month: string, card_exp_year: string, card_cvc: string, password: string): void {
    this.http.post('http://localhost:4242/basic'+'?'+'name'+'='+name+'&'+'email'+'='+email+'&'+"card_number"+'='+encryptData(card_number, 'gogo')+'&'+'card_exp_month'+'='+encryptData(card_exp_month,'gogo')+'&'+'card_exp_year'+'='+encryptData(card_exp_year,'gogo')+'&'+'card_cvc'+'='+encryptData(card_cvc,'gogo')+'&'+'password'+'='+password, {
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_live_51N0mO6SI37IE5p6Umoh1ANmmNC5Pr7gsOEq0qX4GUCbKoFThkZoElqAFCLgFb6H6oa4fHFhqkk3HSNUE2h1Kpmty00KqkIIVnR');
      stripe?.redirectToCheckout({
        sessionId: res.id,
        successUrl: 'https://localhost:3000/basic'+'?'+'name'+'='+name+'&'+'email'+'='+email+'&'+"card_number"+'='+card_number+'&'+'card_exp_month'+'='+card_exp_month+'&'+'card_exp_year'+'='+card_exp_year+'&'+'card_cvc'+'='+card_cvc+'&'+'password'+'='+password,
      })
    })
  }

  buyEverything(name: string, email: string): void {
    console.log("Hello World!")
    this.http.post('http://localhost:4242/everything'+'?'+'name'+'='+name+'&'+'email'+'='+email, {
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_live_51N0mO6SI37IE5p6Umoh1ANmmNC5Pr7gsOEq0qX4GUCbKoFThkZoElqAFCLgFb6H6oa4fHFhqkk3HSNUE2h1Kpmty00KqkIIVnR');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }
}
