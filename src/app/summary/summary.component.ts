import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HandleChangeSummaryService } from '../services/handle-change-summary.service';
import { OpenRouterService } from '../services/call-api-for-summary.service';
import { HandleChangeBasicService } from '../services/handle-change-basic.service';
import { ResumeDataBaseInfo } from '../interfaces/resume-data-base-info';


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

  constructor(
    private handleChangeSummaryService: HandleChangeSummaryService,
    private openRouter: OpenRouterService,
    private handleChangeBasicService: HandleChangeBasicService) { }

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
      this.openRouter
        .getChatCompletion(`Generate a professional CV summary for a ${this.resumeData.jobTitle} with ${this.resumeData.yearsOfExperience} of experience. Highlight skills in ${this.resumeData.skills} in three lines.`).subscribe({
          next: (res) => {
            this.enhancedText = res.choices[0].message.content.replace(/^(\*\*Professional Summary\*\*\s*)/i, '').trim();
          },
          error: (err) => {
            console.error('Error:', err);
          },
        });
    } else {
      this.enhancedText = 'Please fill in Job Title, Years of Experience, and Skills before generating a summary.';
    }
  }
}


// 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
