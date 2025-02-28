import {Component, OnInit} from '@angular/core';
import {TimezoneService} from "../../core/shared/timezone.service";
import {Card} from "primeng/card";
import {AsyncPipe} from "@angular/common";
import {Button} from "primeng/button";
import {combineLatest, map, Observable} from "rxjs";

interface TimezoneData {
  currentDateTime: Date | string | null;
  loading: boolean;
  error: string | null;
}

@Component({
  selector: 'app-timezone',
  imports: [
    Card,
    AsyncPipe,
    Button,
  ],
  templateUrl: './timezone.component.html',
  styleUrl: './timezone.component.scss'
})
export class TimezoneComponent implements OnInit {
  protected timezoneData$: Observable<TimezoneData> | undefined;

  constructor(private timezoneService: TimezoneService) {}

  ngOnInit() {
    this.refreshDateTime();

    this.timezoneData$ = combineLatest([
      this.timezoneService.currentDateTime$,
      this.timezoneService.dateTimeLoading$,
      this.timezoneService.dateTimeError$
    ]).pipe(
        map(([currentDateTime, loading, error]) => ({
          currentDateTime,
          loading,
          error
        }))
    );
  }

  protected refreshDateTime(): void {
    this.timezoneService.updateDateTime();
  }
}
