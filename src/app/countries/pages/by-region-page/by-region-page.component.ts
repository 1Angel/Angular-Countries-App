import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  constructor(private countriesService: CountriesService){}

  public Regions: Country[] =[];

  searchByRegions(term: string){
    return this.countriesService.searchByRegion(term)
    .subscribe(regions=>{
      this.Regions = regions
    });
  }

}
