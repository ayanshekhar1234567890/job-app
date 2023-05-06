import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private http: HttpClient) {

  }

  buyBasic(): void {
    console.log("Hello World!")
    this.http.post('http://localhost:4242/buybasic', {
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_live_51N0mO6SI37IE5p6Umoh1ANmmNC5Pr7gsOEq0qX4GUCbKoFThkZoElqAFCLgFb6H6oa4fHFhqkk3HSNUE2h1Kpmty00KqkIIVnR');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }
}
