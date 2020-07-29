import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface Quiz {
  results: any[];
}

@Injectable({
  providedIn: 'root'
})

export class QuizService {

  constructor(private http: HttpClient) { }

  getQuiz() {
    return this.http.get<Quiz>('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
      .pipe(map(data => data.results || []));
  }
}
