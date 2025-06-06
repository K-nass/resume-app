import { Routes } from '@angular/router';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
    { path: '', component: ResumeFormComponent },
    { path: "summary", component: SummaryComponent }
];
