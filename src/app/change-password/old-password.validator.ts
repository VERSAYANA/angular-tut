import { AbstractControl, ValidationErrors } from '@angular/forms';

export class OldPasswordValidator {
  static invalidOldPassword(
    c: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((c.value as string) !== '123456') {
          resolve({ invalidOldPassword: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
