import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'] // Updated extension to scss
})
export class AboutComponent {
  bio = `With over 3.5 years of experience in the Java ecosystem, I specialize in building high-performance, 
         distributed systems. My journey at Tata Nexarc has been defined by solving complex scale 
         challenges—from migrating monoliths to microservices to architecting event-driven 
         communication hubs using Kafka. I bridge the gap between robust backend engineering 
         and modern AI integration.`;
  
  keyFacts = [
    { label: 'Experience', value: '3.5+ Years' },
    { label: 'Specialization', value: 'Backend & Microservices' },
    { label: 'Current Role', value: 'Software Developer @ Tata Nexarc' },
    { label: 'Tech Stack', value: 'Java 17, Spring Boot, Kafka' }
  ];
}