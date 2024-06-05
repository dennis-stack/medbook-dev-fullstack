import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { HighlightMostVisitsDirective } from './highlight-most-visits.directive';
import { DateFormatPipe } from './date-format.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PatientFormComponent,
    PatientListComponent,
    HighlightMostVisitsDirective,
    DateFormatPipe
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
