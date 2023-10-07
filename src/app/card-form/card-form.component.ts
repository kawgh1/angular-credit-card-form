import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../DateFormControl';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(9999),
      Validators.minLength(3),
      Validators.maxLength(4),
    ]),
  });

  constructor() {
    console.log(this.cardForm.controls.name);
  }

  ngOnInit() {}

  onSubmit() {
    console.log('form was submitted');
  }

  onResetClick() {
    this.cardForm.reset();
  }
}
