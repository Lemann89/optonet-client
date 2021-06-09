import {Component, Input, OnInit} from '@angular/core';
import {IBlock} from '../../services/numbers.service';

@Component({
  selector: 'app-numbers-block',
  templateUrl: './numbers-block.component.html',
  styleUrls: ['./numbers-block.component.css']
})

export class NumbersBlockComponent implements OnInit {

  constructor() { }

  @Input() blockData: IBlock;

  ngOnInit(): void {
  }

}
