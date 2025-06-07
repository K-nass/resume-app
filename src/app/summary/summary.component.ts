import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HandleChangeSummaryService } from '../services/handle-change-summary.service';
import { HandleChangeBasicService } from '../services/handle-change-basic.service';
import { ResumeDataBaseInfo } from '../interfaces/resume-data-base-info';
import { GeminiService } from '../services/call-api-for-summary.service';


@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  summary = '';
  enhancedText: string | null = null;
  resumeData!: ResumeDataBaseInfo
  loading: boolean = false;
  constructor(
    private handleChangeSummaryService: HandleChangeSummaryService,
    private handleChangeBasicService: HandleChangeBasicService,
    private geminiService: GeminiService
  ) { }

  ngOnInit() {
    this.handleChangeBasicService.resumeData.subscribe(data => {
      this.resumeData = data
    })
  }

  onUpdateSummary() {
    this.handleChangeSummaryService.updateSummary(this.summary);
  }

  generateWithAI() {
    if (this.resumeData.jobTitle && this.resumeData.yearsOfExperience && this.resumeData.skills) {
      this.loading = true;
      const prompt = `Write a professional CV summary in exactly three lines for a ${this.resumeData.jobTitle} with ${this.resumeData.noOfExperience} years of experience. Highlight these skills: ${this.resumeData.skills}. Avoid explanation, titles, or formatting — return only the three-line summary text.`;
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
      this.enhancedText = 'Please fill in Job Title, Years of Experience, and Skills before generating a summary.';
      this.loading = false;
    }

  }
}
