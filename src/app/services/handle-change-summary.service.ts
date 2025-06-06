import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleChangeSummaryService {
  private summarySubject = new BehaviorSubject<string>('');
  summary = this.summarySubject.asObservable();

  updateSummary(newSummary: string) {
    this.summarySubject.next(newSummary)
  }
}
