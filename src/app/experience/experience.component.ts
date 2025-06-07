import { Component } from '@angular/core';
import { ExperienceItemComponent } from "./experience-item/experience-item.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
 
}
