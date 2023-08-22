import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  constructor(private countriesService: CountriesService){}

  public countries: Country[] = [];


  searchByCapital(terml: string):void{
    this.countriesService.searchCapital(terml).subscribe(countries=>{
      this.countries = countries;
    });
  }
}
