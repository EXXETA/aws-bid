import { Component, Input, OnInit } from '@angular/core';
import { Profile, Reference } from 'src/app/services/page-content';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {

  @Input() profiles!: Profile[]
  @Input() reference!: Reference;

  constructor() { }

  ngOnInit(): void {
  }

  get linkedProfiles() {
    return this.profiles.filter(profile => profile.tags.includes(this.reference.title));
  }
}
