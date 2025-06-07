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