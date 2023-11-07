import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISlide } from '../interfaces/page-slider.interface';

@Injectable({
  providedIn: 'root',
})
export class PageInfoService {
  private jsonUrl = 'assets/data/slider-details.json';
  constructor(private http: HttpClient) {}

  public getPageDetails(): Observable<ISlide[]> {
    return this.http.get<ISlide[]>(this.jsonUrl);
  }
}
