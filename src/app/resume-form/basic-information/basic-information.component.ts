import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HandleChangeBasicService } from '../../services/handle-change-basic.service';
import { ResumeDataBaseInfo } from '../../interfaces/resume-data-base-info';
import { GeminiService } from '../../services/call-api-for-summary.service';
// import { OpenRouterService } from '../../services/call-api-for-summary.service';


@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.css'
})
export class BasicInformationComponent {
  loading = false
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
    portfolioURL: '',
    yearsOfExperience: '',
    skills: []
  }
  constructor(private handleChangeBasicService: HandleChangeBasicService, private geminiService: GeminiService) { }

  onUpdateResumeData() {
    this.handleChangeBasicService.updateResumeData(this.resumeData);
  }
  skills: string[] = []
  onBlur() {
    if (this.resumeData.jobTitle) {
      this.loading = true;
      const prompt = `List exactly 5 key technical or professional skills commonly required for a ${this.resumeData.jobTitle}. Return the result as a simple, comma-separated list with no explanations or formatting.`;
      this.geminiService.getChatCompletion(prompt).subscribe({
        next: (res) => {
          const result = res.candidates?.[0]?.content?.parts?.[0]?.text;
          this.resumeData.skills = result.trim().split(',');
          this.skills = this.resumeData.skills
          this.loading = false;
        },
        error: (err) => {
          console.error('Gemini API error:', err);
          this.loading = false;
        },
      });
    } else {
      this.loading = false;
    }
  }

  newSkill = ''
  addSkill() {
    this.resumeData.skills.push(this.newSkill)
    console.log(this.resumeData.skills);
  }

}
