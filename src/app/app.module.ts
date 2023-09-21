import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FuneralsComponent } from './funerals/funerals.component';
import { PartiesHomeComponent } from './parties-home/parties-home.component';
import { CorporateHomeComponent } from './corporate-home/corporate-home.component';
import { CookingClassessHomeComponent } from './cooking-classess-home/cooking-classess-home.component';
import { CorsairsChefhomeComponent } from './corsairs-chefhome/corsairs-chefhome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'contact', component: ContactPageComponent },
  { path: '', component: HomepageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FuneralsComponent,
    PartiesHomeComponent,
    CorporateHomeComponent,
    CookingClassessHomeComponent,
    CorsairsChefhomeComponent,
    HomepageComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
