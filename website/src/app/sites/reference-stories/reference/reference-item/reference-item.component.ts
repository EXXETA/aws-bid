import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/services/page-content';

@Component({
  selector: 'app-reference-item',
  templateUrl: './reference-item.component.html',
  styleUrls: ['./reference-item.component.scss']
})
export class ReferenceItemComponent implements OnInit {

  @Input() number!: number;
  @Input() story!: Story;

  constructor() {
  }

  ngOnInit(): void {
  }

}
