export class user{
  id!: number;
  name: string;
  lastName: string
  photoUrl: string
  dateOfBirth: string

  constructor(name: string,lastName:string,photoUrl:string, dateOfBirth:string) {
    this.name = name;
    this.lastName = lastName;
    this.photoUrl = photoUrl;
    this.dateOfBirth = dateOfBirth;
  }
}
