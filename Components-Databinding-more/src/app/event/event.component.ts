import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EvenComponent implements OnInit {
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
