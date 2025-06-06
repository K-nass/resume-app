import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HandleChangeSummaryService } from '../services/handle-change-summary.service';
import { OpenRouterService } from '../services/call-api-for-summary.service';


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

  constructor(
    private handleChangeSummaryService: HandleChangeSummaryService,
    private openRouter: OpenRouterService) { }

  onUpdateSummary() {
    this.handleChangeSummaryService.updateSummary(this.summary);
  }

  generateWithAI() {
    this.openRouter.getChatCompletion('What is the meaning of life?').subscribe({
      next: (res) => {
        this.enhancedText = res.choices[0].message.content;
      },
      error: (err) => {
        console.error('Error:', err);
      },
    });
  }
}


// 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