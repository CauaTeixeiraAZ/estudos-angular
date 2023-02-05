import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { CrudComponent } from './components/crud/crud.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLazyComponent } from './components/home-lazy/home-lazy.component';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    LazyloadingModule
  ],
  declarations: [
    AppComponent,
    DataBindingComponent,
    SegundoComponenteComponent,
    CrudComponent,
    HeaderComponent,
    FooterComponent,
    HomeLazyComponent
  ],

  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
