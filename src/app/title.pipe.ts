import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {
  transform(input: string): any {
    if (!input) {
      return null;
    }

    const words = input.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (i > 0 && this.isPre(words[i])) {
        words[i].toLowerCase();
      } else {
        words[i] = this.toTitleCase(words[i]);
      }
    }

    return words.join(' ');
  }

  private isPre(word: string): boolean {
    const pre = ['the', 'of'];

    return pre.includes(word.toLowerCase());
  }

  private toTitleCase(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
