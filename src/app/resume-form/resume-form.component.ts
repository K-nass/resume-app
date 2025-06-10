import { Component } from '@angular/core';
import { BasicInformationComponent } from "./basic-information/basic-information.component";
import { ResumePreviewComponent } from "./resume-preview/resume-preview.component";
import { CommonModule } from '@angular/common';
import { SummaryComponent } from "../summary/summary.component";
import { ExperienceComponent } from "../experience/experience.component";
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';


@Component({
  selector: 'app-resume-form',
  standalone: true,
  imports: [BasicInformationComponent, ResumePreviewComponent, CommonModule, SummaryComponent, ExperienceComponent , NavbarComponent , FooterComponent],
  templateUrl: './resume-form.component.html',
  styleUrl: './resume-form.component.css'
})
export class ResumeFormComponent {
  step = 1

  goNext() {
    this.step++
  }

  goPrev() {
    this.step--
  }
}
