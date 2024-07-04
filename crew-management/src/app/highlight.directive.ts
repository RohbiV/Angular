import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() highlightColor: string = "";
 


  constructor(private el:ElementRef) {
    console.log("Inside the custom Directive!");
  }

  @HostListener("mouseenter") onMouseEnter() {

    this.highlight(this.highlightColor||"yellow");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("green");
  }

  private highlight(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
