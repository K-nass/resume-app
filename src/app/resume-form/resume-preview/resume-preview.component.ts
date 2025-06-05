import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-preview',
  standalone: true,
  imports: [],
  templateUrl: './resume-preview.component.html',
  styleUrl: './resume-preview.component.css'
})
export class ResumePreviewComponent {
  @Input()
  receivedFirstName: string = ''
  @Input()
  receivedLastName: string = ''
  @Input()
  receivedJobTitleChange: string = ''
  @Input()
  receivedEmailChange: string = ''
  @Input()
  receivedGithubChange:string = ''
}
