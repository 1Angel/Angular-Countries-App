import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit{

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService

    ){}


    public country?: Country;

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.countriesService.SearchCountryByAlphaCode(id)),
    ).subscribe(country =>{
      if(!country){
        return this.router.navigateByUrl('');
      }
      return this.country = country;


    })
  }

}
