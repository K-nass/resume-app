import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HandleChangeBasicService } from '../../services/handle-change-basic.service';
import { ResumeDataBaseInfo } from '../../interfaces/resume-data-base-info';

@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.css'
})
export class BasicInformationComponent {
  resumeData: ResumeDataBaseInfo = {
    firstName: '',
    lastName: '',
    city: '',
    email: '',
    githubUrl: '',
    jobTitle: '',
    linkedInUrl: '',
    noOfExperience: '',
    phone: '',
    portfolioURL: ''
  }
  constructor(private handleChangeBasicService: HandleChangeBasicService) { }

  onUpdateResumeData() {
    this.handleChangeBasicService.updateResumeData(this.resumeData)
  }


}
