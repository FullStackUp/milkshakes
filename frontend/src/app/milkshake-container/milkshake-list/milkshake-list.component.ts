import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Milkshake } from 'src/app/interfaces/milkshake.interface';

@Component({
  selector: 'app-milkshake-list',
  templateUrl: './milkshake-list.component.html',
  styleUrls: ['./milkshake-list.component.scss'],
})
export class MilkshakeListComponent implements OnInit {
  @Input() public milkshakes?: Milkshake[];
  @Output() private changeMilkshake: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public selectMilkshake(index: number): void {
    this.changeMilkshake.emit(index);
  }
}
