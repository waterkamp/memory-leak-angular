import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-deep-details',
  templateUrl: './deep-details.component.html',
  styleUrls: ['./deep-details.component.scss']
})
export class DeepDetailsComponent implements OnDestroy {
  constructor() {
    console.log('constructor deep-details');
  }

  ngOnDestroy(): void {
    console.log('deep-details destroyed');
  }
}
