import { Component } from '@angular/core';
import { PageContentService } from './services/page-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: PageContentService) { }


  get content$() {
    return this.service.getPageContent();
  }
  
}
