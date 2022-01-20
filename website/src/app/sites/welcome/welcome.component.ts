import { Component, Input, OnInit } from '@angular/core';
import { Welcome } from 'src/app/services/page-content';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Input() welcome!: Welcome;

  constructor() { }

  ngOnInit(): void {
  }

  nl2br(s: string) {
    return s.replace(/\n/g, '<br/>');
  }
}
