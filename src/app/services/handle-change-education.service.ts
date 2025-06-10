import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Education {
  school: string;
  degree: string;
  graduationYear: number;
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationData = new BehaviorSubject<Education | null>(null);
  education$ = this.educationData.asObservable();

  setEducation(data: Education) {
    this.educationData.next(data);
  }

  getEducation(): Education | null {
    return this.educationData.value;
  }
}
