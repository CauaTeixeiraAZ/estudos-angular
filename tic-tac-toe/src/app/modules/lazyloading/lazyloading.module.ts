import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyloadingRoutingModule} from './lazyloading-routing.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
