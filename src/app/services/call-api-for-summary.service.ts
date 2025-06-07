import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenRouterService {
  private apiUrl = 'https://openrouter.ai/api/v1/chat/completions';

  constructor(private http: HttpClient) { }

  getChatCompletion(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer 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',
      'Content-Type': 'application/json',
    });

    const body = {
      model: "google/gemma-3n-e4b-it:free",
      max_tokens: 300,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}