import { Experience } from 'src/app/Models/experience';
import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/Services/experience.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.scss']
})

export class EditExperienceComponent implements OnInit {
  experience: Experience = null


  constructor(private experienceService: ExperienceService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienceService.detail(id).subscribe(
      data => {
        this.experience = data;
      }, error => {
        alert("Error al modificar la experiencia")
      this.router.navigate([''])
      }
    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    //const id = this.activatedRouter.snapshot.params['id'];
    this.experienceService.update(id, this.experience).subscribe(data => {
      this.router.navigate([''])
    }, err => {
      alert("Error al modificar la experiencia")
      this.router.navigate([''])
    }
    )
  }}
