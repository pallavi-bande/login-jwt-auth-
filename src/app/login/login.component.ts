import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = 'pallavi';
  password = 'pallavi';

  constructor(private http: HttpClient, private api: ApiService, private customer: CustomerService, private router: Router) { }

  tryLogin() {
    let postdata = {
      "username" : this.email,
      "password": this.password
    }
  
    this.http.post("http://localhost/logistic_v1/api/users/token.json", postdata, httpOptions)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        let token = data['data']['token'];
        console.log("---------------->" + token);
       
        this.customer.setToken(token);
        this.router.navigateByUrl('/dashboard');
       
      });
     // alert("Added Successfully!");
  }


  ngOnInit() {
  }

}
