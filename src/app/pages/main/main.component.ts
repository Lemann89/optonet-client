import { Component, OnInit } from '@angular/core';
import {UserService, IUser} from '../../services/user.service';
import {IBlock, NumbersService} from '../../services/numbers.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public authService: UserService, private numbersService: NumbersService) { }

  allBlocks$: Observable<IBlock[]>;
  allUsers$: Observable<IUser[]>;

  ngOnInit(): void {
  }

  loadBlocks(): void {
    this.allBlocks$ = this.numbersService.getAllBlocks();
  }

  loadUsers(): void {
    this.allUsers$ = this.authService.getAll();
  }
}
