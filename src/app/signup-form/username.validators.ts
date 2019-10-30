import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if (control.value.indexOf(' ') >= 0) {
      return {
        cannotContainSpace: true
      };
    }
    return null;
  }
}
