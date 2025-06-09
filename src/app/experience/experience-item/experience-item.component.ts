import { Component } from '@angular/core';
import { HandleExperienceService } from '../../services/handle-experience.service';
import { ExperienceInterface } from '../../interfaces/experanceinterface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {
  constructor(private HandleExperienceService: HandleExperienceService) { }
  experienceData: ExperienceInterface = {
    companyName: '',
    role: '',
    startYear: '',
    endYear: '',
    description: '',
    presentState: false
  }
  updateExperience() {
    this.HandleExperienceService.updateExperience(this.experienceData)
  }
}
