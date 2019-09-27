import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Portfolio';
  subtitle = 'Take a look at the work I do.';

  constructor() { }

  ngOnInit() {

  }

}
