import { ChangeDetectorRef, Component } from '@angular/core';
import { Job } from '../job/Job';

@Component({
  selector: 'app-local-jobs',
  templateUrl: './local-jobs.component.html',
  styleUrls: ['./local-jobs.component.scss']
})
export class LocalJobsComponent {

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

}
