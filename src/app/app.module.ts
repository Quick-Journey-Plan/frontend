import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './shared/layout/default/default.component';
import { DashboardComponent } from './shared/layout/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeroAreaComponent } from './shared/components/hero-area/hero-area.component';
import { InfoComponent } from './shared/components/info/info.component';
import { TextMediaComponent } from './shared/components/text-media/text-media.component';
import { TextMediaInputComponent } from './shared/components/text-media-input/text-media-input.component';
import { NeutralComponent } from './shared/layouts/neutral/neutral.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    DashboardComponent,
    HomeComponent,
    ImprintComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HeroAreaComponent,
    InfoComponent,
    TextMediaComponent,
    TextMediaInputComponent,
    NeutralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
