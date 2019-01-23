import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  inputs: ['country']
})
export class CountriesComponent implements OnInit {

  countries: object;

  constructor() { }

  ngOnInit() {
  }

}
