import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/Models/experience';
import { ExperienceService } from 'src/app/Services/experience.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = []

  constructor(private experienceService: ExperienceService, private tokenService: TokenService) { }
  esta_logeado = false;
  ngOnInit(): void {
    this.loadExperience();
    if(this.tokenService.getToken()){
      this.esta_logeado = true;
    }
    else{
      this.esta_logeado = false;
    }
  }


  loadExperience(): void {
    this.experienceService.list().subscribe(data => {
    this.experience = data;
    })
  }

}


