import { Component, Input, OnInit } from '@angular/core';
import { Milkshake } from 'src/app/interfaces/milkshake.interface';

@Component({
  selector: 'app-milkshake-details',
  templateUrl: './milkshake-details.component.html',
  styleUrls: ['./milkshake-details.component.scss'],
})
export class MilkshakeDetailsComponent implements OnInit {
  @Input() public milkshake!: Milkshake;

  constructor() {}

  ngOnInit(): void {}
}
