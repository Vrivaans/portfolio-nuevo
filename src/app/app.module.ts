import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillComponentComponent } from './pages/skill-component/skill-component.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './Services/interceptor-service';
import { NewExperienceComponent } from './pages/experience/new-experience/new-experience.component';
import { EditExperienceComponent } from './pages/experience/edit-experience/edit-experience.component';
import { NewEducacionComponent } from './pages/education/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './pages/education/edit-educacion/edit-educacion.component';
import { NewSkillComponent } from './pages/skill-component/new-skill/new-skill.component';
import { EditSkillComponent } from './pages/skill-component/edit-skill/edit-skill.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MainComponent,
    ContactComponent,
    SkillComponentComponent,
    ExperienceComponent,
    EducationComponent,
    LoginComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewSkillComponent,
    EditSkillComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule



  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
