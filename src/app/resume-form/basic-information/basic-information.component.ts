import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.css'
})
export class BasicInformationComponent {
  firstName: string = '';
  lastName: string = '';
  jobTitle: string = '';
  email: string = '';
  gitHub: string = '';
  @Output()
  firstNameChange = new EventEmitter<string>();
  @Output()
  lastNameChange = new EventEmitter<string>();
  @Output()
  jobTitleChange = new EventEmitter<string>()
  @Output()
  emailChange = new EventEmitter<string>();
  @Output()
  gitHubChange = new EventEmitter<string>();

  onFirstNameChange() {
    this.firstNameChange.emit(this.firstName)
  }

  onLastNameChange() {
    this.lastNameChange.emit(this.lastName)
  }

  onJobTitleChange() {
    this.jobTitleChange.emit(this.jobTitle)
  }

  onEmailChange() {
    this.emailChange.emit(this.email)
  }

  onGithubChange() {
    this.gitHubChange.emit(this.gitHub)
  }
}
