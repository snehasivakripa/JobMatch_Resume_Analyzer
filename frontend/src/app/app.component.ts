import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadResumeComponent } from './components/upload-resume/upload-resume.component';
import { SearchResumeComponent } from './components/search-resume/search-resume.component';
import { ResumeListComponent } from './components/resume-list/resume-list.component';
import { CommonModule } from '@angular/common';
import { ResumeDetailComponent } from './components/resume-details/resume-details.component';
@Component({
  selector: 'app-root',
  standalone: true,
    
  imports: [CommonModule, RouterOutlet,ResumeDetailComponent, UploadResumeComponent,
    SearchResumeComponent,
    ResumeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'resume-ats';
  selectedResume: any = null;

  onResumeSelect(resume: any) {
    this.selectedResume = resume;
  }

  onCloseDetail() {
    this.selectedResume = null;
  }
}
