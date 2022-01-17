import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SummaryComponent } from './summary.component';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './not-found.component';

// определение маршрутов
const routes: Routes =[
  { path: '', component: SummaryComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
