// #docregion
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'toh-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  menuItems = [
    'Heroes',
    'Villains',
    'Other'
  ];

  ngOnInit() {  }

  constructor() { }
}
