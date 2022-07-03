import { Component, OnInit } from '@angular/core';
import { Milkshake } from '../interfaces/milkshake.interface';

@Component({
  selector: 'app-milkshake-details',
  templateUrl: './milkshake-details.component.html',
  styleUrls: ['./milkshake-details.component.scss'],
})
export class MilkshakeDetailsComponent implements OnInit {
  milkshake: Milkshake = {
    name: 'Vanilla special',
    img: 'http://img.taste.com.au/2TWekadq/taste/2016/11/top-10-milkshakes-image-1-64000-1.jpg',
    description:
      'Blend 1 tsp vanilla bean paste with the Basic milkshake. Pour into a milkshake glass. Top with whipped cream, a wafer and a cherry.',
  };
  constructor() {}

  ngOnInit(): void {}
}
