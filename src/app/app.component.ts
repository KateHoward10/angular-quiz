import { Component } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-quiz';

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuiz().subscribe(quiz => console.log(quiz));
  }
}
