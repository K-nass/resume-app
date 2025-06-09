import { Component, Input } from '@angular/core';
import { HandleChangeBasicService } from '../../services/handle-change-basic.service';
import { ResumeDataBaseInfo } from '../../interfaces/resume-data-base-info';
import { HandleChangeSummaryService } from '../../services/handle-change-summary.service';
import { CommonModule } from '@angular/common';
import { HandleExperienceService } from '../../services/handle-experience.service';
import { ExperienceInterface } from '../../interfaces/experanceinterface';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
  downloadPDF(){
    const button = document.getElementById('download-btn');
    const element = document.getElementById('resume-preview');
    if(!element || !button) return;


  html2canvas(element, {scale:2}).then(canvas =>{
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p','mm','a4');

    const imgWidth = 210; //A4 width in mm
    const pageHeight = 297; //A4 height in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;

    let heightleft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG',0,position,imgWidth,imgHeight);
    heightleft -= pageHeight;

    while (heightleft > 0){
      position = heightleft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData,'PNG',0,position,imgWidth,imgHeight);
      heightleft -=pageHeight;
    }
    pdf.save(`${this.resumeData.firstName}_${this.resumeData.lastName}Resume.pdf`);
  });
  }
}
