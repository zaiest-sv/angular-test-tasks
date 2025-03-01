import { Component } from '@angular/core';
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {DatePicker} from "primeng/datepicker";
import {InputNumber} from "primeng/inputnumber";
import {Popover} from "primeng/popover";
import {ButtonDirective} from "primeng/button";

@Component({
  selector: 'app-search-form',
  imports: [
    IconField,
    InputIcon,
    InputText,
    FormsModule,
    DatePicker,
    InputNumber,
    Popover,
    ButtonDirective
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {
  public dateOfArrival: Date | string = new Date(Date.now());
  public dateOfDeparture: Date | string = new Date(Date.now());
  public numberOfNights: number = 1;

  adults: number = 2;
  children: number = 0;
  rooms: number = 1;

  public getGuestSummary(): string {
    return `${this.adults} Дорослих${this.children > 0 ? `, ${this.children} Дітей` : ''}`;
  }
}
