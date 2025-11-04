import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-resume-detail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './resume-details.component.html',
  styleUrl: './resume-details.component.css'
})



export class ResumeDetailComponent {
  @Input() resume: any;
  @Output() close = new EventEmitter<void>();
}
