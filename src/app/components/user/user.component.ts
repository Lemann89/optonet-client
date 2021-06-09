import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() userData: IUser;

  ngOnInit(): void {
  }

}
