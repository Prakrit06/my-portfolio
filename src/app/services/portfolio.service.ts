import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  metrics?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  getProjects(): Project[] {
    return [
      {
        title: 'AI-Powered Price Discovery Engine',
        role: 'Lead Developer',
        description: 'Built a GenAI pricing service using Spring AI and WhatsApp integration. Implemented a persistent State Machine for context management and LLM function calling.',
        technologies: ['Spring AI', 'OpenAI', 'Kafka', 'Redis', 'Spring Boot'],
        metrics: 'Improved lead conversion by 20% | Reduced API costs by 15%'
      },
      {
        title: 'High-Scale Lead Management System',
        role: 'Backend Architect',
        description: 'Architected an ingestion system handling 10,000+ concurrent uploads. Used Kafka for asynchronous enrichment and decoupled processing.',
        technologies: ['Java 17', 'Spring Boot', 'Kafka', 'Docker', 'Prometheus'],
        metrics: 'Handled 10k+ concurrent uploads | Zero data loss'
      },
      {
        title: 'Monolith to Microservices Migration',
        role: 'Software Developer',
        description: 'Migrated a legacy monolith to independent microservices. Implemented Resilience4j Circuit Breakers to prevent cascading failures.',
        technologies: ['Microservices', 'Resilience4j', 'Hibernate', 'AWS'],
        metrics: '99.9% System Availability | 30% Latency Reduction'
      }
    ];
  }
}