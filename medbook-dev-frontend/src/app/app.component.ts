import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { HighlightMostVisitsDirective } from './highlight-most-visits.directive';
import { DateFormatPipe } from './date-format.pipe';
import { PatientService } from './services/patient.service';
import { GenderService } from "./services/gender.service";
import { ServiceService } from "./services/service.service";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HttpClientModule,
    PatientFormComponent,
    PatientListComponent,
    HighlightMostVisitsDirective,
    DateFormatPipe
  ],
  providers: [PatientService, GenderService, ServiceService]
})
export class AppComponent {
  title = 'medbook-dev-frontend';
}
