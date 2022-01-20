import { Component, Input, OnInit } from '@angular/core';
import { Profile, Reference } from 'src/app/services/page-content';

@Component({
  selector: 'app-reference-stories',
  templateUrl: './reference-stories.component.html',
  styleUrls: ['./reference-stories.component.scss']
})
export class ReferenceStoriesComponent implements OnInit {

  @Input() references!: Reference[]
  @Input() profiles!: Profile[]

  ngOnInit(): void {
  }

}
