import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/services/page-content';

@Component({
  selector: 'app-reference-cvs-profile',
  templateUrl: './reference-cvs-profile.component.html',
  styleUrls: ['./reference-cvs-profile.component.scss']
})
export class ReferenceCvsProfileComponent implements OnInit {

  @Input() profile!: Profile

  constructor() { }

  ngOnInit(): void {
  }

}
