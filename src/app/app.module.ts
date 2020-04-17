import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuComponent } from './menu/menu.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { DetailesComponent } from './detailes/detailes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot(
    [
      { path:"", component: InformationComponent },
      { path:"detailes", component: DetailesComponent }
    ]
  ), ],
  declarations: [ AppComponent, TopBarComponent, MenuComponent, InformationComponent, FooterComponent, OurTeamComponent, DetailesComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
