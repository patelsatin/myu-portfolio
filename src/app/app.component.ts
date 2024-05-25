import { Component } from '@angular/core';
import { TypingService } from './services/typing.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio-ui';
  toggleMobileNav(event: Event) {
    // Toggle the class on the body element
    document.body.classList.toggle('mobile-nav-active');
    
    // Toggle the classes on the clicked element
    const target = event.target as HTMLElement;
    target.classList.toggle('bi-list');
    target.classList.toggle('bi-x');
  }
  
}
