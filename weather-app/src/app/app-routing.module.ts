import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SummaryComponent } from './summary.component';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './not-found.component';

// определение маршрутов
const routes: Routes =[
  { path: '', redirectTo: 'summary', pathMatch: 'full'},
  // Не забыть о том, что есть туть код, который зависит от этого роута
  // и его порядка.
  // app.component.ts -> this.router.parseUrl(this.router.url).root.children["primary"]
  { path: 'summary', component: SummaryComponent},
  { path: 'about', component: AboutComponent},
  { path: 'privacy-policy', component: AboutComponent},
  { path: 'terms-of-use', component: AboutComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
