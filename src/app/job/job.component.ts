import {
  ChangeDetectorRef,
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  NgModule
} from '@angular/core';
import { Job } from './Job';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent implements OnInit, OnDestroy {
  jobs!: Job[];
  authencicated = localStorage.getItem("authencicated");

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

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const jobs = data.data.map(({ job_title, job_description, job_google_link }: Job) => ({
        job_title,
        job_description,
        job_google_link
      }));
      localStorage.setItem('jobs', JSON.stringify(jobs));
      this.ngOnInit();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  number(string: string): number {
    return Number.parseInt(string)
  }

}
