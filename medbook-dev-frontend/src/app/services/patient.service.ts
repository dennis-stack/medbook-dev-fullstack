import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Patient } from '../../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = `${environment.apiUrl}/patients`;
  private patientServicesUrl = `${environment.apiUrl}/patient-services`;

  constructor(private http: HttpClient) { }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  addPatientService(patientService: { patient_id: number, service_id: number, comments: string }): Observable<any> {
    return this.http.post(this.patientServicesUrl, patientService);
  }

  savePatientWithService(patient: Patient, serviceId: number, comments: string): Observable<any> {
    return this.addPatient(patient).pipe(
      switchMap((savedPatient: Patient) => {
        const patientService = {
          patient_id: savedPatient.id,
          service_id: serviceId,
          comments: comments
        };
        return this.addPatientService(patientService);
      })
    );
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }
}
