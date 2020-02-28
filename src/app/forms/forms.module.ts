import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactFromComponent } from './react-from/react-from.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [ReactFromComponent, TemplateDrivenComponent],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
