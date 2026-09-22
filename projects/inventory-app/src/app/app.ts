import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<main class="standalone"><router-outlet /></main>',
  styles: [
    `
      .standalone {
        min-height: 100vh;
        padding: 1.5rem;
        background: #f8fafc;
      }
    `,
  ],
})
export class App {}
