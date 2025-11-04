import { Routes } from '@angular/router';
import { UploadResumeComponent } from './components/upload-resume/upload-resume.component';
import { SearchResumeComponent } from './components/search-resume/search-resume.component';
import { ResumeListComponent } from './components/resume-list/resume-list.component';

export const routes: Routes = [
  { path: '', component: UploadResumeComponent },
  { path: 'search', component: SearchResumeComponent },
  { path: 'list', component: ResumeListComponent },
];
