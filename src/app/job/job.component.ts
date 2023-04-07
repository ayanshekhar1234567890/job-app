import { ChangeDetectorRef, Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Job } from './Job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobComponent implements OnInit {

  jobs!: Job[];

  constructor(public changeDetectorRef: ChangeDetectorRef) {
    this.jobs = JSON.parse(localStorage.getItem('jobs') ?? "[]");
  }

  ngOnInit(): void {
  }

  /**
   * It will give a result of jobs
   * @param text The text is the text from which the function can sort jobs
   * @returns {void}
   */
  fetchJobs(text: string): void {

    const url = `https://jsearch.p.rapidapi.com/search?query=${text}&page=1&num_pages=1`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5cf3ab5104msh8b2dc4fbca796c7p15d31ejsn73261ac3aeba',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        /**
         * @ayanshekhar1234567890
         * Prints the `job_title` object from `json`.
         */
        json.data.forEach(({ job_title }: Job) => console.log(job_title));
        json.data.forEach(( { job_description }: Job) => console.log(job_description));
        json.data.forEach(({ job_google_link }: Job) => console.log(job_google_link));
        let jobsFetched = json.data.map(({ job_title, job_description, job_google_link }: Job) => ({
          job_title,
          job_description,
          job_google_link
        }));
        localStorage.setItem('jobs', JSON.stringify(jobsFetched))
        this.ngOnInit()
      })
      .catch(err => console.error('error:' + err));

  }

}