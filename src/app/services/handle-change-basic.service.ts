import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResumeDataBaseInfo } from '../interfaces/resume-data-base-info';
@Injectable({
  providedIn: 'root'
})
export class HandleChangeBasicService {
  private resumeDataSubject = new BehaviorSubject<ResumeDataBaseInfo>(
    {
      firstName: '',
      lastName: '',
      city: '',
      email: '',
      githubUrl: '',
      jobTitle: '',
      linkedInUrl: '',
      noOfExperience: '',
      phone: '',
      portfolioURL: '',
      yearsOfExperience: '',
      skills: []
    }
  )

  resumeData = this.resumeDataSubject.asObservable()

  updateResumeData(resumeData: ResumeDataBaseInfo) {
    this.resumeDataSubject.next(resumeData)
  }

}
