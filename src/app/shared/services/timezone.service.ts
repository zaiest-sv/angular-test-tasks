import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  private timezoneApiUrl = 'https://timeapi.io/api/timezone/zone';

  private dateTimeSubject = new BehaviorSubject<string | Date | null>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  public currentDateTime$ = this.dateTimeSubject.asObservable();
  public dateTimeLoading$ = this.loadingSubject.asObservable();
  public dateTimeError$ = this.errorSubject.asObservable();

  constructor(private http: HttpClient) {}

  public updateDateTime(timeZone: string = 'Europe/Kiev'): void {
    if (this.loadingSubject.getValue()) {
      return;
    }

    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    const url = `${this.timezoneApiUrl}?timeZone=${encodeURIComponent(timeZone)}`;
    this.http.get<{ currentLocalTime: string }>(url).pipe(
        catchError(err => {
          console.error('err ', err)
          this.errorSubject.next('Error loading date!');
          this.loadingSubject.next(false);
          return of(null);
        })
    ).subscribe(response => {
      this.dateTimeSubject.next(response?.currentLocalTime || null);
      this.loadingSubject.next(false);
    });
  }
}
