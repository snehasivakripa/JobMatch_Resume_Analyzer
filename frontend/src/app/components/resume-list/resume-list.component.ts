import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-resume-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './resume-list.component.html',
  styleUrl: './resume-list.component.css'
})

export class ResumeListComponent implements OnInit {
  resumes: any[] = [];
  @Output() selectResume = new EventEmitter<any>();

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.loadResumes();
  }

  loadResumes() {
    this.resumeService.getAllResumes().subscribe({
      next: (data) => (this.resumes = data),
      error: (err) => console.error(err)
    });
  }

  viewResume(resume: any) {
    this.selectResume.emit(resume);
  }
}
