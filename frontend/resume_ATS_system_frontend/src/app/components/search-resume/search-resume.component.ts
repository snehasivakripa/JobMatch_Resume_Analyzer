import { Component, Output, EventEmitter } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-resume',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search-resume.component.html',
  styleUrl: './search-resume.component.css'
})
export class SearchResumeComponent {
  keyword = '';
  results: any[] = [];

  @Output() selectResume = new EventEmitter<any>();

  constructor(private resumeService: ResumeService) {}

  search() {
    if (!this.keyword.trim()) {
      this.results = [];
      return;
    }

    this.resumeService.searchCandidates(this.keyword).subscribe({
      next: (res) => this.results = res.results,
      error: (err) => console.error(err)
    });
  }

  viewResume(resume: any) {
    this.selectResume.emit(resume);
  }
}
