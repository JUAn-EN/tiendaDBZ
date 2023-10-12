import { Directive , HostListener, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appScrollListener]'
})
export class ScrollListenerDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const gap = 50;
    if (window.pageYOffset > gap) {
      this.renderer.addClass(this.el.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'active');
    }
  }
}
