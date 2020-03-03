import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactFromComponent } from './react-from/react-from.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactFromComponent, TemplateDrivenComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormsComponentsModule { }
