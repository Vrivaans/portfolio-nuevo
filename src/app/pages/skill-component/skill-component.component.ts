import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Models/skill';
import { SkillService } from 'src/app/Services/skill.service';
import { TokenService } from 'src/app/Services/token.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.scss']
})
export class SkillComponentComponent implements OnInit {
  skill: Skill[] = []
  nivel:string = ""

  constructor(private tokenService: TokenService, private skillService: SkillService) { }
  esta_logeado:boolean = false;

  ngOnInit(): void {
    this.loadSkill();
    if(this.tokenService.getToken()){
      this.esta_logeado = true;
    }
    else{
      this.esta_logeado = false;
    }

  }
  loadSkill(): void {
    this.skillService.list().subscribe(data => {
      this.skill = data;
      })
  }
  reLoadList():void {
    this.loadSkill();
  }

  delete(id?:number) {
    if(id != undefined){
      this.skillService.delete(id).subscribe(data => {
        this.loadSkill();
      },err => {
        //alert("Hubo un error al borrar la habilidad")
        this.loadSkill()
      }
      )
      this.loadSkill();
    }
  }
  onClose(): void {
    this.loadSkill();
  }




}
