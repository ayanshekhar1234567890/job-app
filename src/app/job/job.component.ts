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
   * This function returns a set of jobs by filterig the jobs from the jobs api using the `text` parameter.
   * @param text This parameter helps to filter jobs from the api.
   * @todo Add a increment-type thing in which once the user searches 1 job the app will ask him money 200 Rs to get infinite jobs.
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

    /** */
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        /**
         * @ayanshekhar1234567890
         * Prints the `job_title` object from `json`.
         */
        json.data.forEach(({ job_title }: Job) => console.log(job_title));
        /**
         * @ayanshekhar1234567890
         * Prints the `job_description` object from `json`.
         */
        json.data.forEach(( { job_description }: Job) => console.log(job_description));
        /**
         * @ayanshekhar1234567890
         * Prints the `job_google_link` object from `json`.
         */
        json.data.forEach(({ job_google_link }: Job) => console.log(job_google_link));
        let jobsFetched = json.data.map(({ job_title, job_description, job_google_link }: Job) => ({
          job_title,
          job_description,
          job_google_link
        }));
        localStorage.setItem('jobs', JSON.stringify(jobsFetched))
        
        window.location.reload();

      })
      .catch(err => console.error('error:' + err));

  }

}