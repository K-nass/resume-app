import { Component } from '@angular/core';
import { Education, EducationService } from '../services/handle-change-education.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-education-form',
  standalone: true,
  templateUrl: './education.component.html',
  imports: [CommonModule,FormsModule],
})
export class EducationFormComponent {
  education: Education = {
    school: '',
    degree: '',
    graduationYear: new Date().getFullYear()
  };

  constructor(private educationService:EducationService) { }

  submitForm() {
    this.educationService.setEducation(this.education);
  }
}
