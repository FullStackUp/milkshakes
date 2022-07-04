import { Component, Input, OnInit } from '@angular/core';
import { Milkshake } from 'src/app/interfaces/milkshake.interface';

@Component({
  selector: 'app-milkshake-list',
  templateUrl: './milkshake-list.component.html',
  styleUrls: ['./milkshake-list.component.scss'],
})
export class MilkshakeListComponent implements OnInit {
  @Input() public milkshakes?: Milkshake[];
  constructor() {}

  ngOnInit(): void {}
}
