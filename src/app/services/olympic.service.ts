import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Olympic } from '../models/olympic.model';

@Injectable({
  providedIn: 'root'
})
export class OlympicService {

  private apiUrl = 'assets/mock/olympic.json';

  constructor(private http: HttpClient) {}

  getOlympics(): Observable<Olympic[]> {
    return this.http.get<Olympic[]>(this.apiUrl);
  }
}