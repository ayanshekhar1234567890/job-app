import { Component } from '@angular/core';

@Component({
  selector: 'app-local-jobs',
  templateUrl: './local-jobs.component.html',
  styleUrls: ['./local-jobs.component.scss']
})
export class LocalJobsComponent {

  gridData: Array<{heading: string; url: string;}> = [  
    { heading: "Physiotherapist, Patna, Bihar", url: "https://www.naukri.com/physiotherapist-jobs-in-india-bihar-patna?k=physiotherapist&l=india%20bihar%20patna&nignbevent_src=jobsearchDeskGNB" },  
    { heading: "Proffesor, Ranchi, Jharkhand", url: "https://example.com" },  
    { heading: "Grid 3", url: "https://example.com" },  
    { heading: "Grid 4", url: "https://example.com" },  
    { heading: "Grid 5", url: "https://example.com" },  
    { heading: "Grid 6", url: "https://example.com" }
  ];

}
