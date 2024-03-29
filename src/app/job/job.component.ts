import {
  ChangeDetectorRef,
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  NgModule
} from '@angular/core';
import { Job } from './Job';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent implements OnInit, OnDestroy {
  jobs!: Job[];

  constructor(public changeDetectorRef: ChangeDetectorRef, private http: HttpClient) {
    this.jobs = JSON.parse(localStorage.getItem('jobs') ?? '[]');
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  /**
 * This function fetches jobs from an API and stores them in local storage.
 * @param text The search query to filter jobs.
 * @param changeDetectorRef The ChangeDetectorRef object to detect changes and update the UI.
 */
  async fetchJobs(text: string): Promise<void> {
    const url = `https://jsearch.p.rapidapi.com/search?query=${text}&page=1&num_pages=1`;
    const options = {
      headers: {
        'X-RapidAPI-Key': '5cf3ab5104msh8b2dc4fbca796c7p15d31ejsn73261ac3aeba',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };
    /**
     * This block of code makes the request to the RapidAPI service and parses the response.
     * The response is a JSON object that contains an array of jobs. The jobs are then stored in the browser's local storage.
     * Finally, the ngOnInit() method is called to update the UI.
     */
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const jobs = data.data.map(({ job_title, job_description, job_google_link }: Job) => ({
        job_title,
        job_description,
        job_google_link
      }));
      
      let increment = localStorage.getItem('increment');
      if (increment) {
        if (Number.parseInt(increment) == 1) {
          alert("Buy Premium to get more jobs")
          throw new Error("Buy Premium to get more jobs")
        }
      }
      else {
        localStorage.setItem('jobs', JSON.stringify(jobs));
        localStorage.setItem('increment', "1");
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }

  number(string: string): number {
    return Number.parseInt(string)
  }

  onContribute(amount: number): void {
    this.http.post('http://localhost:4242/checkout', {
      amount: amount
    }).subscribe(async (res: any) => {
      let stripe: any = await loadStripe('pk_live_51N0mO6SI37IE5p6Umoh1ANmmNC5Pr7gsOEq0qX4GUCbKoFThkZoElqAFCLgFb6H6oa4fHFhqkk3HSNUE2h1Kpmty00KqkIIVnR');
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "inr",
              product_data: {
                name: "Basic plan",
                images: [],
              },
              unit_amount: 100 * 100,
            },
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: "http://localhost:4242/success.html",
        cancel_url: "http://localhost:4242/cancel.html",
      });
      stripe?.redirectToCheckout({
        sessionId: session.id
      })
    })
  }

  account() {


  }

}
