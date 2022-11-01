import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  Batsman = "Virat Kohli";
  Average = 75.45;
  Height = 6.0;
  BaseSalary = 10000000;
  WinPercentage = 20 / 100;
  lastMatch = Date.now();
  About = "Virat Kohli is an Indian international cricketer and former captain of the India national cricket team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman. Kohli made his Test debut in 2011";

  constructor() { }

  ngOnInit(): void {
  }

}
