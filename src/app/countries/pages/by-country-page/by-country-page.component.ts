import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  constructor(private countriesService: CountriesService){}


  public countries: Country[] =[];

  searchByCountry(term: string){
    return this.countriesService.searchByCountry(term)
    .subscribe(countries=>{
      this.countries = countries;
    })
  }

}
