import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  role: string;
  summary: string;     // Shown in the main grid (4-5 lines)
  details: string[];   // Bullet points shown in the popup modal
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
        title: 'Whatsapp Framework Architecture',
        role: 'Backend Architect',
        summary: 'Architected a versatile notification framework to automate transactional and promotional messaging, integrating real-time capture of customer replies for seamless lead generation.',
        details: [
          'Architected a versatile WhatsApp notification framework to automate transactional and promotional messaging.',
          'Integrated the platform with WhatsApp APIs, enabling real-time capture and management of customer replies.',
          'Developed automated lead creation pipelines that trigger upon receiving user responses.',
          'Implemented consent-sharing protocols to ensure data privacy compliance and a secure user experience.',
          'Engineered backend logic to handle high-volume notification triggers for time-sensitive business alerts.'
        ],
        technologies: ['Java', 'Spring Boot', 'WhatsApp API', 'Microservices'],
        metrics: 'Automated Lead Pipelines | Real-time Reply Capture'
      },
      {
        title: 'TOFU (Top Of Funnel) System',
        role: 'Lead Developer',
        summary: 'Led the design of a high-performance database system focused on efficient lead acquisition, enrichment, and nurturing to maximize conversion rates.',
        details: [
          'Led the design and implementation of a high-performance database system, optimizing lead management with streamlined data structures.',
          'Designed a high-performing web page capable of handling more than 10,000 lead data uploads at a time.',
          'Implemented Apache Solr for advanced near real-time (NRT) searching capabilities.',
          'Streamlined marketing and sales efforts to enhance product visibility and maximize conversion rates.'
        ],
        technologies: ['Apache Solr', 'Spring Boot', 'PostgreSQL', 'Data Engineering'],
        metrics: '10k+ Concurrent Uploads | Near Real-Time Search'
      },
      {
        title: 'External Partnership Framework',
        role: 'System Engineer',
        summary: 'Engineered a high-performance framework enabling seamless customer transitions from partner platforms to Tata Nexarc, expanding market reach through optimized API interoperability.',
        details: [
          'Engineered a high-performance External Partnership framework enabling seamless customer transitions from partner platforms.',
          'Developed and optimized the framework\'s UI and backend logic, successfully onboarding multiple strategic partners.',
          'Implemented diverse, high-conversion user journeys which significantly scaled the volume of prospects.',
          'Enhanced system interoperability between external partner APIs and internal Nexarc services.'
        ],
        technologies: ['REST APIs', 'Spring Security', 'System Interop'],
        metrics: 'Scaled Prospect Volume | Automated Acquisition Pipelines'
      },
      {
        title: 'AI-Powered Price Discovery Engine',
        role: 'Lead Developer',
        summary: 'Built a GenAI pricing service using Spring AI and WhatsApp integration. Implemented a persistent State Machine for context management and LLM function calling.',
        details: [
          'Built a GenAI pricing service using Spring AI and WhatsApp integration.',
          'Implemented a persistent State Machine for context management and LLM function calling.',
          'Improved lead conversion by 20% and reduced API costs by 15%.',
          'Leveraged Spring Boot and Kafka for real-time price discovery and matching.'
        ],
        technologies: ['Spring AI', 'OpenAI', 'Kafka', 'Redis', 'Spring Boot'],
        metrics: '20% Lead Conversion Boost | 15% Cost Reduction'
      },
      {
        title: 'Multi-Vendor Integration Hub',
        role: 'Integration Lead',
        summary: 'Led the seamless integration of the Tata Nexarc platform with multiple vendors like Mixpanel and Webengage to enhance analytics and engagement.',
        details: [
          'Led the seamless integration of the platform with vendors such as Mixpanel and Webengage.',
          'Architected and implemented robust integration protocols for data synchronization.',
          'Enhanced analytics capabilities and customer engagement strategies through third-party platform communication.',
          'Fostered a holistic approach to data-driven decision-making for personalized user experiences.'
        ],
        technologies: ['Mixpanel API', 'Webengage', 'Integration Protocols'],
        metrics: 'Enhanced Analytics | Data-Driven Decision Making'
      },
      {
        title: 'Monolith to Microservices Migration',
        role: 'Software Developer',
        summary: 'Migrated a legacy monolith to independent microservices, implementing resilience patterns to prevent cascading failures and reduce system latency.',
        details: [
          'Migrated a legacy monolith to independent microservices.',
          'Implemented Resilience4j Circuit Breakers to prevent cascading failures.',
          'Achieved 99.9% System Availability.',
          'Realized a 30% reduction in system latency.'
        ],
        technologies: ['Microservices', 'Resilience4j', 'Hibernate', 'AWS'],
        metrics: '99.9% Availability | 30% Latency Reduction'
      }
    ];
  }
}