// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { ExperienceInterface } from '../interfaces/experanceinterface'
// @Injectable({
//   providedIn: 'root'
// })
// export class HandleExperienceService {
//   experienceList: ExperienceInterface[] = []
//   private experienceSubject = new BehaviorSubject<ExperienceInterface>(
//     {
//       companyName: '',
//       role: '',
//       startYear: '',
//       endYear: '',
//       presentState: false,
//       description: ''
//     }
//   )

//   experience = this.experienceSubject.asObservable();

//   updateExperience(experience: ExperienceInterface) {
//     this.experienceSubject.next(experience);
//     this.experienceList.push(experience)
//   }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExperienceInterface } from '../interfaces/experanceinterface';

@Injectable({ providedIn: 'root' })
export class HandleExperienceService {
  private experienceListSource = new BehaviorSubject<ExperienceInterface[]>([]);
  experienceList$ = this.experienceListSource.asObservable();

  get experienceList(): ExperienceInterface[] {
    return this.experienceListSource.getValue();
  }

  updateExperienceAt(index: number, experience: ExperienceInterface) {
    const updated = [...this.experienceList];
    updated[index] = experience;
    this.experienceListSource.next(updated);
  }

  addExperience() {
    const newExperience: ExperienceInterface = {
      companyName: '',
      startYear: '',
      endYear: '',
      role: '',
      description: '',
      presentState: false
    };
    this.experienceListSource.next([...this.experienceList, newExperience]);
  }

  removeExperience(index: number) {
    const updated = this.experienceList.filter((_, i) => i !== index);
    this.experienceListSource.next(updated);
  }
}
