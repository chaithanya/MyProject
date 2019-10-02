import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <br><br><br><br><br>
    <h1>
      child Component Input Example: 
    </h1>
    {{user}}
    <br>
    <p> ngonchanges example :  {{data}}</p>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() user: string;
  data: string;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges){
    if(changes['user']){
        this.data = 'Hello :' + this.user; 
      
    }
  }

}
