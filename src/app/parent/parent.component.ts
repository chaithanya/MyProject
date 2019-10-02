import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <br><br><br><br>
  <input type="text" [(ngModel)]="tochild" name="testchild">
  <app-child [user]="tochild"></app-child>

  <app-animate></app-animate>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
