import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './model/LoginResultModel'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('http://localhost/logistic_v1/api/users/token.json', {
      username: email,
      password: password
    });
  }
}
