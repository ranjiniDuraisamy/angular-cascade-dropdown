import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from '../model/state';
import { Country } from '../model/country';
import { City } from '../model/city';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  fetchCountries() {
    return this.http.get<Country[]>('/assets/json/countries.json');
  }
  fetchStates() {
    return this.http.get<State[]>('/assets/json/states.json');
  }
  fetchCities() {
    return this.http.get<City[]>('/assets/json/cities.json');
  }
}
