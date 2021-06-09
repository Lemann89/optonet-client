import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

export interface IPrime {
  isPrime: boolean;
}

export interface ICountPrimes {
  amount: number;
}

export interface IBlock {
  id: number;
  left: number;
  right: number;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor(private httpClient: HttpClient) { }

  checkIsPrime(numberToCheck): Observable<IPrime> {
    return this.httpClient.get<IPrime>(`${environment.BaseURL}/test/${numberToCheck}`);
  }

  checkCountOfPrimeApproximate(range): Observable<ICountPrimes> {
      return this.httpClient.get<ICountPrimes>(`${environment.BaseURL}/counter/approximate/${range}`);
  }

  checkCountOfPrimeExact(range): Observable<ICountPrimes> {
      return this.httpClient.get<ICountPrimes>(`${environment.BaseURL}/counter/exact/${range}`);
  }

  getAllBlocks(): Observable<IBlock[]> {
    return this.httpClient.get<IBlock[]>(`${environment.BaseURL}/blocks`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
  }

  getBlockById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.BaseURL}/blocks/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
  }
}
