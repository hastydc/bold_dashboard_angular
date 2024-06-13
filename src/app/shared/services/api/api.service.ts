import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Transaction } from '@app/models/transaction.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly httpService: HttpClient = inject(HttpClient);

  getData(): Observable<Transaction[]> {
    return this.httpService.get<Transaction[]>('./assets/api/data.json');
  }
}
