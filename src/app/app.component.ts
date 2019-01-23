import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  query: string;
  countries: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //make a request from restcountries.eu
    this.http.get<any>('https://restcountries.eu/rest/v2/all').subscribe(
      data => {
        this.countries = data;
        // console.log(this.countries);
      })
  }
}
