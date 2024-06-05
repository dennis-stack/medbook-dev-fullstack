import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightMostVisits]',
  standalone: true
})
export class HighlightMostVisitsDirective implements OnChanges {
  @Input() appHighlightMostVisits: { patients: any[], patientId: number } = { patients: [], patientId: 0 };

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    const { appHighlightMostVisits: appHighlightMostVisits1 } = changes;
    if (appHighlightMostVisits1) {
      this.highlight();
    }
  }

  private highlight() {
    const { patients } = this.appHighlightMostVisits;

    const nameCounts = patients.reduce((acc: { [key: string]: number }, patient: any) => {
      const name = patient.name.toLowerCase();
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {});

    const maxCount = Math.max(...Object.values(nameCounts));
    const mostFrequentName = Object.keys(nameCounts).find(name => nameCounts[name] === maxCount && maxCount > 1);

    const patient = patients.find(p => p.id === this.appHighlightMostVisits.patientId);
    if (patient && patient.name.toLowerCase() === mostFrequentName) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = null;
    }
  }
}
