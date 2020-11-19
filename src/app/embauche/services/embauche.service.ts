import { Injectable } from '@angular/core';
import { Personne } from 'src/app/cv/model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnesEmbauches:Personne[] = []

  embauche(personne: Personne) {
    if(this.personnesEmbauches.indexOf(personne)==-1){
      this.personnesEmbauches.push(personne);
      return 1;
    }
    else{
      return 0;
    }
  }

  getEmbauche(){
    return this.personnesEmbauches
  }

  constructor() { }
}
