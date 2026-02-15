import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Software Developer',
      company: 'Tata Business Hub Limited',
      period: 'Jun 2024 - Present',
      description: 'Lead backend optimization and microservices migration.',
      achievements: [
        'Migrated monolith to Spring Boot Microservices (99.9% availability).',
        'Optimized Hibernate caching, reducing latency by 30%.',
        'Implemented Resilience4j Circuit Breakers for fault tolerance.',
        'Designed Kafka pipelines for decoupled lead enrichment.'
      ]
    },
    {
      role: 'Junior Java Developer',
      company: 'Tata Business Hub Limited',
      period: 'Oct 2022 - May 2024',
      description: 'Developed core APIs and integration modules.',
      achievements: [
        'Developed REST/SOAP APIs for vendor onboarding (98% on-time delivery).',
        'Built event-driven integration using Kafka and REST APIs.',
        'Refactored MySQL schemas to boost query efficiency by 20%.',
        'Collaborated with cross-functional Agile teams.'
      ]
    }
  ];
}