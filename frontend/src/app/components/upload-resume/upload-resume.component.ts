import { Component } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-upload-resume',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './upload-resume.component.html',
  styleUrl: './upload-resume.component.css'
})

export class UploadResumeComponent {
  selectedFile: File | null = null;
  uploadMessage = '';

  constructor(private resumeService: ResumeService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadResume() {
    if (!this.selectedFile) {
      this.uploadMessage = '⚠️ Please select a file.';
      return;
    }

    this.resumeService.uploadResume(this.selectedFile).subscribe({
      next: (res) => {
        this.uploadMessage = res.message;
        this.selectedFile = null;
      },
      error: (err) => {
        this.uploadMessage = err.error?.error || '❌ Upload failed.';
      }
    });
  }
}

