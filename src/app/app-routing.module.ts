import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactFromComponent } from './forms/react-from/react-from.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'templateDriven', component: TemplateDrivenComponent},
  {path: 'reactFrom', component: ReactFromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
