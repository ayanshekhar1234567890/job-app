import { ChangeDetectorRef, Component } from '@angular/core';
import { Job } from '../job/Job';

@Component({
  selector: 'app-local-jobs',
  templateUrl: './local-jobs.component.html',
  styleUrls: ['./local-jobs.component.scss']
})
export class LocalJobsComponent {

<<<<<<< HEAD
  constructor() {
    const left = document.getElementById("left-side");
    const handleOnMove = (e: any) => {
      const p = e.clientX / window.innerWidth * 100;

      if (left) {
        left.style.width = `${p}%`;
      }

      document.onmousemove = e => handleOnMove(e);

      document.ontouchmove = e => handleOnMove(e.touches[0]);
    }
  }

  gridData: Array<{heading: string; url: string;}> = [  
    { heading: "Physiotherapist, Patna, Bihar", url: "https://www.naukri.com/physiotherapist-jobs-in-india-bihar-patna?k=physiotherapist&l=india%20bihar%20patna&nignbevent_src=jobsearchDeskGNB" },  
    { heading: "Proffesor, Ranchi, Jharkhand", url: "https://example.com" },  
    { heading: "Grid 3", url: "https://example.com" },  
    { heading: "Grid 4", url: "https://example.com" },  
    { heading: "Grid 5", url: "https://example.com" },  
    { heading: "Grid 6", url: "https://example.com" }
  ];
>>>>>>> c9e4deb919c80539485e12c27d13a3583e398172

}
