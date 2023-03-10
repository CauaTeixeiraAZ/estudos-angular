import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import{ RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';

import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    LazyloadingModule,
    ReactiveFormsModule,
    FormsModule,
  ],


  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
