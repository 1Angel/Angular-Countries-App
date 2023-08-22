import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-region-table',
  templateUrl: './region-table.component.html',
  styleUrls: ['./region-table.component.css']
})
export class RegionTableComponent {

  @Input()
  public regions: Country[] =[];

}
