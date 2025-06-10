import { Routes } from '@angular/router';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { SummaryComponent } from './summary/summary.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    { path: 'resume-form', component: ResumeFormComponent },
    { path: "summary", component: SummaryComponent }
];
