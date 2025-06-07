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


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class CvSummaryEnhancerService {
//   private readonly openRouterEndpoint = 'https://openrouter.ai/api/v1/chat/completions';
//   private readonly apiKey = 'Bearer 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';

//   constructor(private httpClient: HttpClient) { }

//   enhanceSummary(userSummary: string): Observable<any> {
//     const headers = new HttpHeaders({
//       Authorization: this.apiKey,
//       'Content-Type': 'application/json',
//     });

//     const requestPayload = {
//       model: 'openai/gpt-4o',
//       max_tokens: 300,
//       messages: [
//         {
//           role: 'user',
//           content: userSummary,
//         },
//       ],
//     };

//     return this.httpClient.post(this.openRouterEndpoint, requestPayload, { headers });
//   }
// }
