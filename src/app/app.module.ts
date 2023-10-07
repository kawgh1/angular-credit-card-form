import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { InputComponent } from './card-form/input/input.component';

import {
  IConfig,
  NgxMaskDirective,
  NgxMaskPipe,
  provideNgxMask,
} from 'ngx-mask';
import { CardComponent } from './card/card.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [AppComponent, CardFormComponent, InputComponent, CardComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
