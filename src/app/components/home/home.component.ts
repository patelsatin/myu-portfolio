import { Component } from '@angular/core';
import { map } from 'rxjs';
import { TypingService } from 'src/app/services/typing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  titles = ['Web Developer', 'Web Designer', 'Database Developer'];
  typedText$;
  constructor(private typewriterService: TypingService) {
    this.typedText$ = this.typewriterService
      .getTypewriterEffect(this.titles)
      .pipe(map((text) => text));
  }
}
