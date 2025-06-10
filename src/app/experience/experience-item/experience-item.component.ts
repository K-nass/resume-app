import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HandleExperienceService } from '../../services/handle-experience.service';
import { ExperienceInterface } from '../../interfaces/experanceinterface';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {
  @Input() index!: number;
  newExperience: ExperienceInterface = {
    companyName: '',
    startYear: '',
    endYear: '',
    role: '',
    description: '',
    presentState: false
  }
  constructor(private handleExperienceService: HandleExperienceService) { }

  onUpdate() {
    this.handleExperienceService.updateExperienceAt(this.index, { ...this.newExperience });
  }
}
