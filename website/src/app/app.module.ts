import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReferenceStoriesComponent } from './sites/reference-stories/reference-stories.component';
import { ReferenceComponent } from './sites/reference-stories/reference/reference.component';
import { ReferenceItemComponent } from './sites/reference-stories/reference/reference-item/reference-item.component';
import { WelcomeComponent } from './sites/welcome/welcome.component';
import { ReferenceCvsComponent } from './sites/reference-cvs/reference-cvs.component';
import { ReferenceCvsProfileComponent } from './sites/reference-cvs/reference-cvs-profile/reference-cvs-profile.component';
import { FooterComponent } from './footer/footer.component';
import { LinkButtonComponent } from './sites/welcome/link-button/link-button.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReferenceStoriesComponent,
    ReferenceComponent,
    ReferenceItemComponent,
    WelcomeComponent,
    ReferenceCvsComponent,
    ReferenceCvsProfileComponent,
    FooterComponent,
    LinkButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPageScrollCoreModule.forRoot({duration: 300}),
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
