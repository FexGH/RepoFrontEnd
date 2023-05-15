import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialwebsLinkComponent } from './components/socialwebs-link/socialwebs-link.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialwebsLinkComponent,
    BannerComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
