import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/Models/experience';
import { ExperienceService } from 'src/app/Services/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.scss']
})
export class NewExperienceComponent implements OnInit {
  //id?:number;
  position:string ="";
  startDate: string = ""
  endDate: string = ""
  photoUrl: string = ""

  constructor(private experienceService: ExperienceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experience = new Experience(this.position, this.startDate, this.endDate, this.photoUrl)
    this.experienceService.save(experience).subscribe(data => {alert("Experiencia guardada");
    this.router.navigate(['']), (err: any) =>{
      alert("La carga falló al guardarse")
      this.router.navigate([''])
    }
  })
  }

}
