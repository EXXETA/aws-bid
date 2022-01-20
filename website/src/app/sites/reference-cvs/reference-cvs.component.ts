import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/services/page-content';

@Component({
  selector: 'app-reference-cvs',
  templateUrl: './reference-cvs.component.html',
  styleUrls: ['./reference-cvs.component.scss']
})
export class ReferenceCvsComponent implements OnInit {

  @Input() profiles!: Profile[]

  constructor() { }

  ngOnInit(): void {
  }

}
