import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  uploadResume(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/upload_resume`, formData);
  }

  getAllResumes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/resumes`);
  }

  searchCandidates(keyword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/search`, { keyword });
  }
}
