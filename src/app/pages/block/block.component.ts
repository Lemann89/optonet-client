import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {NumbersService} from '../../services/numbers.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css'],
})
export class BlockComponent implements OnInit {

  constructor(public route: ActivatedRoute, private numbersService: NumbersService, ) { }

  data: any;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.numbersService.getBlockById(params.id).subscribe(res => {
        this.data = res;
        console.log(this.data);
      });
    });
  }

}
