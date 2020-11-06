import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCosComponent } from './cos/lista-cos/lista-cos.component';
import { ListaProduseComponent } from './produse/lista-produse/lista-produse.component';

const routes: Routes = [
  { path: '', component: ListaProduseComponent},
  { path: 'cos', component: ListaCosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
