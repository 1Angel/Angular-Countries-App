import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, tap } from "rxjs";
import { Country } from "../interfaces/country.interface";

@Injectable({providedIn: 'root'})
export class CountriesService{

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient){}


  SearchCountryByAlphaCode(code: string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/alpha/${code}`)
  }

  searchCapital(term: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/capital/${term}`)
    .pipe(
      catchError(error=>of([]))
    )
  }

  searchByCountry(term: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/name/${term}`);
  }

  searchByRegion(term: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/region/${term}`);
  }
}
