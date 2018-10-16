import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') color: string;
  @Input() colors: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  ngOnInit() {
    console.log(this.colors);
  }
}
