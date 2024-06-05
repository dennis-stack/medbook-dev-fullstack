import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Gender } from '../../models/gender.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  private apiUrl = `${environment.apiUrl}/genders`;

  constructor(private http: HttpClient) { }

  getGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>(this.apiUrl);
  }
}
