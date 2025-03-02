import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, exhaustMap, map, Observable, of, startWith} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TimezoneData} from "../interfaces/timezone-data.interface";

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  private timezoneApiUrl = 'https://timeapi.io/api/timezone/zone';
  private refreshTrigger$ = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) {}

  public dateTimeData$: Observable<TimezoneData> = this.refreshTrigger$.pipe(
      exhaustMap(() =>
          this.http.get<{ currentLocalTime: string }>(`${this.timezoneApiUrl}?timeZone=Europe/Kiev`).pipe(
              map(response => ({ currentDateTime: response.currentLocalTime, loading: false, error: null })),
              catchError(() => of({ currentDateTime: null, loading: false, error: 'Error loading date!' })),
              startWith({ currentDateTime: null, loading: true, error: null })
          )
      ),
  );

  public refreshDateTime(): void {
    this.refreshTrigger$.next();
  }
}
