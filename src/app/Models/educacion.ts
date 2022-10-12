export class Educacion {
  id?:number;
   nameCertification: string;
   expeditionDate: string
   nameInstitution: string
   enCurso: boolean

  constructor(nameCertification: string, expeditionDate: string, nameInstitution: string, enCurso: boolean) {
      this.nameCertification = nameCertification
      this.expeditionDate = expeditionDate
      this.nameInstitution = nameInstitution
      this.enCurso  = enCurso
  }




  /*
    Así es en Backend
    -----------------
    private int id;
    private String nameCertification;
    private String expeditionDate;
    private String nameInstitution;
    private boolean enCurso;
  */

}
