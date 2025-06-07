import { Component } from '@angular/core';
import { ExperienceItemComponent } from "./experience-item/experience-item.component";
import { HandleExperienceService } from '../services/handle-experience.service';
import { ExperienceInterface } from '../interfaces/experanceinterface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experienceData: ExperienceInterface = {
    companyName: '',
    role: '',
    startYear: '',
    endYear: '',
    description: '',
    presentState: false
  }
  constructor(private handleExperienceService: HandleExperienceService) { }
}
