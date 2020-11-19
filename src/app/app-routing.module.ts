import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/pages/cv/cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';


const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'embauches', component: EmbaucheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
