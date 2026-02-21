import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true
})
export class HeroComponent implements OnInit {
  displayTitle = '';
  fullTitle = 'Prakrit Saha_'; // The underscore adds a cursor vibe

  ngOnInit() {
    let i = 0;
    const interval = setInterval(() => {
      this.displayTitle += this.fullTitle[i];
      i++;
      if (i === this.fullTitle.length) clearInterval(interval);
    }, 100);
  }
}