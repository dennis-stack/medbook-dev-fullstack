export class Patient {
  id!: number;
  name: string;
  date_of_birth: Date;
  gender_id: number | null;
  gender: { id: number, name: string };
  services: { id: number, patient_id: number, service_id: number, comments: string, service: { id: number, name: string } }[];
  visits: number;

  constructor() {
    this.name = '';
    this.date_of_birth = new Date();
    this.gender_id = null;
    this.gender = { id: 0, name: '' };
    this.services = [];
    this.visits = 0;
  }
}
