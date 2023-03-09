import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private testService: TestService) {
    console.log('constructor home');
  }

  ngOnInit(): void {
    console.log('OnInit home');

    this.testService.broadcaster$.subscribe(message => console.log('broadcast message recieved in home', message));
  }

  ngOnDestroy(): void {
    console.log('home destroyed');
  }
}
