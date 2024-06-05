import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { GenderService } from '../services/gender.service';
import { ServiceService } from '../services/service.service';
import { Patient } from '../../models/patient.model';
import { Gender } from '../../models/gender.model';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class PatientFormComponent implements OnInit {
  patient: Patient = new Patient();
  genders: Gender[] = [];
  services: Service[] = [];
  selectedServiceId: number | null = null;
  comments: string = '';

  constructor(
    private patientService: PatientService,
    private genderService: GenderService,
    private serviceService: ServiceService
  ) { }

  ngOnInit(): void {
    this.genderService.getGenders().subscribe(genders => this.genders = genders);
    this.serviceService.getServices().subscribe(services => this.services = services);
  }

  onSubmit() {
    if (this.selectedServiceId && this.comments) {
      this.patientService.savePatientWithService(this.patient, this.selectedServiceId, this.comments).subscribe(() => {
        window.location.reload();
      });
    } else {
      alert('Please select a service and add comments');
    }
  }
}
