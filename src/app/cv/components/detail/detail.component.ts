import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { EmbaucheService } from 'src/app/embauche/services/embauche.service';
import { Personne } from '../../model/personne';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(private toastr: ToastrService,private embaucheService:EmbaucheService) {}

  ngOnInit(): void {}

  embaucher(){
    let success = this.embaucheService.embauche(this.personne)
    if(success == 1){
      this.toastr.success('cette personne est embauchée', 'félicitation',{positionClass:"toast-bottom-left"});
     

    }
    else {
      this.toastr.error("cette personne est déjà embauchée","Désolé",{positionClass:"toast-bottom-left"})
    }
  }
}
