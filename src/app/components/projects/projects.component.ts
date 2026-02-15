import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
// Note: We are importing the Interface directly from the service file now to keep it simple
import { PortfolioService, Project } from '../../services/portfolio.service'; 

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = []; // This should now be green/valid

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
  }
}