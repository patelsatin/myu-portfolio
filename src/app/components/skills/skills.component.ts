import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  data: any = [];
  value = 4;
  constructor() {
    this.data = [
      {
          data: { name: 'JavaScript Libraries', size: '4', type: 'category' },
          children: [
              { data: { name: 'ReactJS', size: '5', type: 'skill' } },
              { data: { name: 'Angular', size: '5', type: 'skill' } },
              { data: { name: 'jQuery', size: '4', type: 'skill' } },
              { data: { name: 'BCryptJS', size: '3', type: 'skill' } },
              { data: { name: 'Bootstrap', size: '5', type: 'skill' } },
              { data: { name: 'EmailJS', size: '4', type: 'skill' } }
          ]
      },
      {
          data: { name: 'Programming Languages', size: '5', type: 'category' },
          children: [
              { data: { name: 'Core Java (JSE)', size: '5', type: 'skill' } },
              { data: { name: 'Advanced Java (JEE)', size: '5', type: 'skill' } },
              { data: { name: 'Python (Basic)', size: '2', type: 'skill' } }
          ]
      },
      {
          data: { name: 'Web Technologies', size: '4', type: 'category' },
          children: [
              { data: { name: 'HTML5', size: '4', type: 'skill' } },
              { data: { name: 'CSS3', size: '5', type: 'skill' } },
              { data: { name: 'XML', size: '3', type: 'skill' } },
              { data: { name: 'JavaScript', size: '5', type: 'skill' } },
              { data: { name: 'AJAX', size: '4', type: 'skill' } }
          ]
      },
      {
          data: { name: 'IDE & Tools', size: '5', type: 'category' },
          children: [
              { data: { name: 'Eclipse', size: '3', type: 'skill' } },
              { data: { name: 'VsCode', size: '5', type: 'skill' } },
              { data: { name: 'STS', size: '5', type: 'skill' } },
              { data: { name: 'IntelliJ', size: '5', type: 'skill' } }
          ]
      },
      {
          data: { name: 'Version Control', size: '5', type: 'category' },
          children: [
              { data: { name: 'GIT', size: '5', type: 'skill' } }
          ]
      },
      {
          data: { name: 'Database', size: '4', type: 'category' },
          children: [
              { data: { name: 'PostgreSQL', size: '4', type: 'skill' } },
              { data: { name: 'MySQL', size: '3', type: 'skill' } },
              { data: { name: 'MongoDB', size: '4', type: 'skill' } }
          ]
      },
      {
          data: { name: 'Methodologies', size: '4', type: 'category' },
          children: [
              { data: { name: 'Agile', size: '5', type: 'skill' } },
              { data: { name: 'Waterfall', size: '2', type: 'skill' } }
          ]
      },
      {
          data: { name: 'Other Tools & Technologies', size: '4', type: 'category' },
          children: [
              { data: { name: 'Apache Kafka', size: '3', type: 'skill' } },
              { data: { name: 'GitHub Copilot', size: '5', type: 'skill' } },
              { data: { name: 'Angular-CLI', size: '5', type: 'skill' } },
              { data: { name: 'JIRA', size: '5', type: 'skill' } },
              { data: { name: 'Git Bash', size: '5', type: 'skill' } },
              { data: { name: 'Sparkola', size: '3', type: 'skill' } },
              { data: { name: 'Collibra', size: '3', type: 'skill' } }
          ]
      },
      {
          data: { name: 'Java Frameworks', size: '5', type: 'category' },
          children: [
              { data: { name: 'Spring Boot', size: '5', type: 'skill' } },
      ]
    }
  ]
  }
}
