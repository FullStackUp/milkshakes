import { Component, OnInit, Input } from '@angular/core';
import { Milkshake } from 'src/app/interfaces/milkshake.interface';

@Component({
  selector: 'app-milkshake-details',
  templateUrl: './milkshake-details.component.html',
  styleUrls: ['./milkshake-details.component.scss'],
})
export class MilkshakeDetailsComponent implements OnInit {
  @Input() milkshake!: Milkshake;

  constructor() {}

  ngOnInit(): void {}
}
