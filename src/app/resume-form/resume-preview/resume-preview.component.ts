import { Component, Input } from '@angular/core';
import { HandleChangeBasicService } from '../../services/handle-change-basic.service';
import { ResumeDataBaseInfo } from '../../interfaces/resume-data-base-info';
@Component({
  selector: 'app-resume-preview',
  standalone: true,
  imports: [],
  templateUrl: './resume-preview.component.html',
  styleUrl: './resume-preview.component.css'
})
export class ResumePreviewComponent {
  constructor(private handleChangeBasicService: HandleChangeBasicService) { }
  resumeData!: ResumeDataBaseInfo
  ngOnInit() {
    this.handleChangeBasicService.resumeData.subscribe(data => {
      this.resumeData = data
    })
  }
}
