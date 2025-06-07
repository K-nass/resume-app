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
      model: 'openai/gpt-4o',
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