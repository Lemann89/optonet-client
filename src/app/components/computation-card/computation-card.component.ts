import {Component, Input, OnInit} from '@angular/core';
import {NumbersService, IPrime, ICountPrimes} from '../../services/numbers.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-computation-card',
  templateUrl: './computation-card.component.html',
  styleUrls: ['./computation-card.component.css']
})
export class ComputationCardComponent {

  constructor(private numbersService: NumbersService) {
  }

  @Input() title: string;
  @Input() type: string;

  inputNumber;
  amountPrimes$: Observable<ICountPrimes>;
  isPrime: boolean;
  prime$: Observable<IPrime>;

  checkIsPrime(): void {
    this.prime$ = this.numbersService.checkIsPrime(this.inputNumber);
  }

  checkCountOfPrime(): void {
    if (this.type === 'exact') {
        this.amountPrimes$ = this.numbersService.checkCountOfPrimeExact(this.inputNumber);
        return;
      }
    this.amountPrimes$ = this.numbersService.checkCountOfPrimeApproximate(this.inputNumber);
  }
}
