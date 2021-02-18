import { AfterContentInit, Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'anime';

  ngAfterContentInit(): void {
    anime({
      targets: '.circle-grid .circle',
      loop: true,
      direction: 'alternate',
      translateX: anime.stagger(10, {
        grid: [11, 6],
        from: 'center',
        axis: 'x',
      }),
      translateY: anime.stagger(10, {
        grid: [11, 6],
        from: 'center',
        axis: 'y',
      }),
      rotateZ: anime.stagger([0, 90], {
        grid: [11, 6],
        from: 'center',
        axis: 'x',
      }),
      borderRadius: anime.stagger([44, 0], {
        grid: [11, 6],
        from: 'center',
        axis: 'x',
      }),
      delay: anime.stagger(200, { grid: [11, 6], from: 'center' }),
      easing: 'easeInOutQuad',
    });
    anime({
      targets: '.header-card #header-rect',
      width: '100px',
      easing: 'easeInOutQuart',
      delay: 2000,
    });

    new Typed('.header-card h1', {
      strings: ["", "energetic design."],
      typeSpeed: 30,
      showCursor: false,
      startDelay: 3000,
    });
  }
}
