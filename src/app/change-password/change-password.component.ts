import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OldPasswordValidator } from './old-password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form = new FormGroup({
    oldPassword: new FormControl(
      '',
      Validators.required,
      OldPasswordValidator.invalidOldPassword
    )
  });

  get oldPassword() {
    return this.form.get('oldPassword');
  }
}
