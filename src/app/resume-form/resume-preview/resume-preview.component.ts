import { Component, Input } from '@angular/core';
import { HandleChangeBasicService } from '../../services/handle-change-basic.service';
import { ResumeDataBaseInfo } from '../../interfaces/resume-data-base-info';
import { HandleChangeSummaryService } from '../../services/handle-change-summary.service';
import { CommonModule } from '@angular/common';
import { HandleExperienceService } from '../../services/handle-experience.service';
import { ExperienceInterface } from '../../interfaces/experanceinterface';
@Component({
  selector: 'app-resume-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-preview.component.html',
  styleUrl: './resume-preview.component.css'
})
export class ResumePreviewComponent {
  constructor(private handleChangeBasicService: HandleChangeBasicService,
    private handleChangeSummaryService: HandleChangeSummaryService,
  private handleExperienceService:HandleExperienceService) { }
  resumeData!: ResumeDataBaseInfo
  summary = ''
  experience!:ExperienceInterface
  ngOnInit() {
    this.handleChangeBasicService.resumeData.subscribe(data => {
      this.resumeData = data
    })
    this.handleChangeSummaryService.summary.subscribe(summary => {
      this.summary = summary
    })

    this.handleExperienceService.experience.subscribe(experience => {
      this.experience = experience
    })
  }
}
