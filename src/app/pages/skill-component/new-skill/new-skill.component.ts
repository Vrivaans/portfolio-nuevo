import { SkillService } from './../../../Services/skill.service';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Models/skill';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.scss']
})
export class NewSkillComponent implements OnInit {
  nameHability = ""
  iconHability = ""
  percentageHability = 0

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    const skill = new Skill (this.nameHability, this.iconHability, this.percentageHability)
    this.skillService.save(skill).subscribe(data => {
      alert("Habilidad guardada correctamente")
      this.router.navigate([''])
    }, err => {
      alert("Hubo un error y no se pudo guardar la habilidad")
      this.router.navigate([''])
    }

    )
  }
  /*

    onCreate(): void {
    const experience = new Experience(this.position, this.startDate, this.endDate, this.photoUrl)
    this.experienceService.save(experience).subscribe(data => {alert("Experiencia guardada");
    this.router.navigate(['']

    ), (err: any) =>{
      alert("La carga falló al guardarse")
      this.router.navigate([''])
    }
  })
  }

  */

  reLoadList():void {
    window.location.reload()
  }

}
