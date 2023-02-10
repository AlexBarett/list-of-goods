import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextareaResize]',
  standalone: true
})
export class TextareaResizeDirective {

  constructor(private el: ElementRef<HTMLTextAreaElement>) { }

  @HostListener('ngModelChange')
  resize() {
    this.el.nativeElement.style.height = 'auto';
    const height = this.el.nativeElement.scrollHeight;
    this.el.nativeElement.style.height = height + 'px';
  }
}
