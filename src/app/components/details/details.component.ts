import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  constructor(private testService: TestService) {
    console.log('constructor details');
  }

  ngOnInit(): void {
    console.log('OnInit details');

    this.testService.broadcaster$.subscribe((message) =>
      console.log('broadcast message received in details', message)
    );
  }

  ngOnDestroy(): void {
    console.log('details destroyed');
  }

  public sendMessage() {
    this.testService.broadcaster$.next('Hello I am the detail-page!');
  }
}
