import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {TimezoneService} from "../../shared/services/timezone.service";
import {Card} from "primeng/card";
import {AsyncPipe, DatePipe} from "@angular/common";
import {Button} from "primeng/button";
import {Observable} from "rxjs";
import {TimezoneData} from "../../shared/interfaces/timezone-data.interface";

@Component({
  selector: 'app-timezone',
  imports: [
    Card,
    AsyncPipe,
    Button,
    DatePipe,
  ],
  templateUrl: './timezone.component.html',
  styleUrl: './timezone.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimezoneComponent {
  private timezoneService = inject(TimezoneService);
  protected timezoneData$: Observable<TimezoneData> = this.timezoneService.dateTimeData$;

  constructor() {}

  protected refreshDateTime(): void {
    this.timezoneService.refreshDateTime();
  }
}
