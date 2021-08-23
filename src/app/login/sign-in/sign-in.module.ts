import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import { SignInComponent } from './sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatCardHeader,
    MatCardContent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignInModule { }
