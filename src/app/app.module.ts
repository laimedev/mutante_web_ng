import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { MenuComponent } from './sections/menu/menu.component';
import { SlidersComponent } from './sections/sliders/sliders.component';
import { DetailsComponent } from './sections/details/details.component';
import { CircleComponent } from './elements/circle/circle.component';
import { OfertasComponent } from './elements/ofertas/ofertas.component';
import { NewsComponent } from './elements/news/news.component';
import { StoreComponent } from './elements/store/store.component';
import { BannerComponent } from './elements/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SlidersComponent,
    DetailsComponent,
    CircleComponent,
    OfertasComponent,
    NewsComponent,
    StoreComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
