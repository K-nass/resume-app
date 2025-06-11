import { Component } from '@angular/core';
import { ExperienceItemComponent } from "./experience-item/experience-item.component";
import { HandleExperienceService } from '../services/handle-experience.service';
import { ExperienceInterface } from '../interfaces/experanceinterface';
import { CommonModule } from '@angular/common';
import { GeminiService } from '../services/call-api-for-summary.service';
import { HandleChangeBasicService } from '../services/handle-change-basic.service';



@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: number[] = [0]
  experienceCounter = 1
  loading = false
  enhancedText = ''

  experienceList: ExperienceInterface[] = [];
  experienceData: ExperienceInterface = {
    companyName: '',
    startYear: '',
    endYear: '',
    role: '',
    description: '',
    presentState: false
  };

  ngOnInit() {
    this.handleExperienceService.experienceList$.subscribe((list) => {
      this.experienceList = list;
    });
  }


  constructor(private handleExperienceService: HandleExperienceService, private geminiService: GeminiService) { }

  addExperience() {
    this.experiences.push(this.experienceCounter++)
    this.handleExperienceService.addExperience();
  }

  removeExperience(i: number) {
    this.experiences.splice(i, 1);
    this.handleExperienceService.removeExperience(i);
  }

  generateWithAI(index: number) {
    const experience = this.experienceList[index];
    if (experience?.role && experience?.companyName) {
      this.loading = true;
      const prompt = `Write a professional CV experience in exactly 4 lines for a ${this.experienceData.role} with ${this.experienceData.companyName} Return the result as a simple, comma-separated list with no explanations or formatting.`;

      this.geminiService.getChatCompletion(prompt).subscribe({
        next: (res) => {
          const result = res.candidates?.[0]?.content?.parts?.[0]?.text;
          this.enhancedText = result;
          this.loading = false;
        },
        error: (err) => {
          console.error('Gemini API error:', err);
          this.enhancedText = 'An error occurred. Please try again.';
          this.loading = false;
        },
      });
    } else {
      this.enhancedText = 'Please fill in Job Title and Company Name before generating a experience.';
      this.loading = false;
    }
  }

}