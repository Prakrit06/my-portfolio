import { Component, HostListener, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'my-portfolio';

  // Trigger the reveal check as soon as the view is ready
  ngAfterViewInit() {
    setTimeout(() => {
      this.onWindowScroll();
    }, 100);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const root = document.documentElement;
    root.style.setProperty('--mouse-x', e.clientX + 'px');
    root.style.setProperty('--mouse-y', e.clientY + 'px');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100; 

      // Improved Logic: Activate if it's near the bottom OR already at/above the top
      if (elementTop < windowHeight - revealPoint || elementTop < 0) {
        el.classList.add('active');
      }
    });
  }
}