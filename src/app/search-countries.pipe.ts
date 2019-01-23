import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCountries'
})
export class SearchCountriesPipe implements PipeTransform {

  //takes in data(countries) and search input: query
  transform(data: any[], query: string): any[] {

    //check if there is data
    if (!data) return [];

    //check if query exists
    if (!query) return data;

    //run the filter
    return data.filter(item => {
      return item['name'].toLowerCase().includes(query.toLowerCase());
    });
  }
}
