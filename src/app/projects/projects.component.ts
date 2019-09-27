import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('projectsAnim', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-20px)', opacity: '0'}),
        animate('800ms ease-in-out')
      ]),
      transition('* => void', [
        animate('800ms ease-in-out'),
        style({transform: 'translateY(-20px)', opacity: '0'})
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  pageTitle = 'Projects';
  projects = [
    { name: 'Animal Shelter Website',
      image: 'http://placekitten.com/g/200/200',
      description: 'Chase mice chase imaginary bugs, so stand in doorway, unwilling to chase dog.'
    },
    { name: 'Cats are Cute Graphic',
      image: 'http://placekitten.com/g/400/400',
      description: 'Chase cats run imaginary bugs, so stand in doorway, unwilling to chase dog.'
    }
  ];

  name = '';
  image = '';
  description = '';
  state = 'active';

  addProject(value) {
    // Add to array
    this.projects.push({ name: value.name, image: value.image, description: value.description});
    // Clear inputs
    this.name = '';
    this.image = '';
    this.description = '';
  }

  removeProject(project) {
    this.projects.splice(project, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
