import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
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
  static passwordsDontMatch(c: AbstractControl): ValidationErrors | null {
    const newPasswordValue: string = c.get('newPassword').value;
    const confirmNewPasswordValue: string = c.get('confirmNewPassword').value;
    if (newPasswordValue !== confirmNewPasswordValue) {
      return {
        passwordsDontMatch: true
      };
    } else {
      return null;
    }
  }
}
