import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyloadingModule } from './lazyloading.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HomeLazyComponent } from './../../components/home-lazy/home-lazy.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLazyComponent
  }
];

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule {}
