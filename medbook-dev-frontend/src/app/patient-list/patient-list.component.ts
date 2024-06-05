import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../services/patient.service';
import { Patient } from '../../models/patient.model';
import { DateFormatPipe } from "../date-format.pipe";
import { HighlightMostVisitsDirective } from '../highlight-most-visits.directive';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  standalone: true,
  imports: [CommonModule, DateFormatPipe, HighlightMostVisitsDirective]
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(patients => this.patients = patients);
  }
}
