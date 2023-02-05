import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';

const routes: Routes = [
  
  { path: 'lazy', loadChildren: () =>
    import('./modules/lazyloading/lazyloading.module').then(
      m => m.LazyloadingModule
      )
  },

  {path: 'primeiro-component', component: DataBindingComponent},
  {path: 'segundo-component', component: SegundoComponenteComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
