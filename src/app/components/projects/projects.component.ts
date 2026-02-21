import { Component, HostListener, OnInit } from '@angular/core';
import { PortfolioService, Project } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  showAll = false;
  selectedProject: Project | null = null;
  allProjects: Project[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.allProjects = this.portfolioService.getProjects();
  }

  get displayedProjects(): Project[] {
    return this.showAll
      ? this.allProjects
      : this.allProjects.slice(0, 3);
  }

  toggleProjects(): void {
    this.showAll = !this.showAll;
  }

  // openPopup(project: Project): void {
  //   this.selectedProject = project;
  //   document.body.style.overflow = 'hidden';
  // }

  // closePopup(): void {
  //   this.selectedProject = null;
  //   document.body.style.overflow = 'auto';
  // }

  openPopup(project: Project): void {
  this.selectedProject = project;
  document.body.classList.add('modal-open');
}

closePopup(): void {
  this.selectedProject = null;
  document.body.classList.remove('modal-open');
}


  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closePopup();
  }
}
