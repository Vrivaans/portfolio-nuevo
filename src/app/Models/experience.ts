export class Experience {
  id?:number;
  position:string;
  startDate: string;
  endDate: string;
  photoUrl: string;

  constructor(position:string, startDate:string, endDate:string, photoUrl:string){
    this.position = position;
    this.startDate = startDate;
    this.endDate = endDate;
    this.photoUrl = photoUrl;
  }





  /* Así es en el backend
  private int id;
    private String position;
    private String startDate;
    private String endDate;
    private String photoUrl;
  */
}
