import { Component, OnInit } from '@angular/core';
import { AddressService } from './services/address.service';
import { State } from './model/state';
import { Country } from './model/country';
import { City } from './model/city';
import { filter, map, tap } from 'rxjs/operators';
import { state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-cascade-dropdown';
  countries: Country[] = [];
  states: State[] = [];
  cities: City[] = [];
  constructor(private service: AddressService) {
    this.service.fetchCountries().subscribe((data) => (this.countries = data));
  }
  fetchStates(countrySelected: any) {
    this.states = [];
    this.cities = [];
    this.service
      .fetchStates()
      .pipe(
        map((items) =>
          items.filter((item) => item.country_id == countrySelected.value)
        )
      )
      .subscribe((val) => {
        this.states = val;
      });
  }

  fetchCities(stateSelected: any) {
    this.cities = [];
    this.service
      .fetchCities()
      .pipe(
        map((items) =>
          items.filter((item) => item.state_id == stateSelected.value)
        )
      )
      .subscribe((val) => (this.cities = val));
  }
}
