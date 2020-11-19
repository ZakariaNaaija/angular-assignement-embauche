import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/pages/cv/cv.component';
import { DetailComponent } from './cv/components/detail/detail.component';
import { ItemComponent } from './cv/components/item/item.component';
import { ListComponent } from './cv/components/list/list.component';
import { StructurelleComponent } from './components/structurelle/structurelle.component';
import { RandomStringPipe } from './pipes/random-string.pipe';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { HeaderComponent } from './components/header/header.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    TwoComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    DetailComponent,
    ItemComponent,
    ListComponent,
    StructurelleComponent,
    RandomStringPipe,
    DefaultImagePipe,
    HeaderComponent,
    EmbaucheComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
