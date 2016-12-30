import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
private isOpen = false;

@HostBinding('class.open') get opened() {
     return this.isOpen;
}
  
@HostListener('click') open() {
  if (this.isOpen) {
    this.isOpen = false;
  } else {
     this.isOpen = true;
  }
}  
  
}
