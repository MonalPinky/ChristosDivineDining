import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FuneralsComponent } from './homepage/funerals/funerals.component';
import { PartiesHomeComponent } from './homepage/parties-home/parties-home.component';
import { CorporateHomeComponent } from './homepage/corporate-home/corporate-home.component';
import { CookingClassessHomeComponent } from './homepage/cooking-classess-home/cooking-classess-home.component';
import { CorsairsChefhomeComponent } from './homepage/corsairs-chefhome/corsairs-chefhome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactPageComponent } from './businesspages/contact-page/contact-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { BusinesspagesComponent } from './businesspages/businesspages.component';
import { AboutusComponent } from './businesspages/aboutus/aboutus.component';
import { TestimonialsComponent } from './businesspages/testimonials/testimonials.component';
import { RecipesComponent } from './businesspages/recipes/recipes.component';
import { PartiesComponent } from './services/parties/parties.component';
import { CorporateComponent } from './corporate/corporate.component';
import { CorsairchefComponent } from './services/corsairchef/corsairchef.component';

const appRoutes: Routes = [
  { path: 'contact', component: ContactPageComponent },
  { path: '', component: HomepageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'recipes', component: RecipesComponent },
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
    ServicesComponent,
    BusinesspagesComponent,
    AboutusComponent,
    TestimonialsComponent,
    RecipesComponent,
    PartiesComponent,
    CorporateComponent,
    CorsairchefComponent,
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
