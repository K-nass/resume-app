import { Component } from '@angular/core';
import { BasicInformationComponent } from "./basic-information/basic-information.component";
import { ResumePreviewComponent } from "./resume-preview/resume-preview.component";

@Component({
  selector: 'app-resume-form',
  standalone: true,
  imports: [BasicInformationComponent, ResumePreviewComponent],
  templateUrl: './resume-form.component.html',
  styleUrl: './resume-form.component.css'
})
export class ResumeFormComponent {
  firstNameChange: string = ''
  lastNameChange: string = ''
  jobTitleChange: string = ''
  emailChange: string = ''
  githubChange:string = ''
  onFirstNameChange(firstName: string) {
    this.firstNameChange = firstName
  }

  onLastNameChange(lastName: string) {
    this.lastNameChange = lastName
  }

  onLastJobTitleChange(jobTitle: string) {
    this.jobTitleChange = jobTitle
  }

  onEmailChange(email: string) {
    this.emailChange = email;
  }

  onGithubChange(github:string) {
    this.githubChange = github
  }
}
