import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExperienceInterface } from '../interfaces/experanceinterface'
@Injectable({
  providedIn: 'root'
})
export class HandleExperienceService {
  private experienceSubject = new BehaviorSubject<ExperienceInterface>(
    {
      companyName: '',
      role: '',
      startYear: '',
      endYear: '',
      presentState: false,
      description: ''
    }
  )

  experience = this.experienceSubject.asObservable();

  updateExperience(experience: ExperienceInterface) {
    this.experienceSubject.next(experience)
  }
}
