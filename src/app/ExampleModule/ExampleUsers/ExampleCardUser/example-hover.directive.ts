import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: "[appHover]",
    host:{
        "(mouseenter)": "onMouseEnter()",
        "(mouseleave)": "onMouseLeave()"
    }

})
export class HoverDirective{
    @HostBinding('class.hovered') isHovered = false;

    // @HostListener('mouseenter') 
    onMouseEnter(){
        this.isHovered = true;
    }
    // @HostListener('mouseleave')
     onMouseLeave(){
        this.isHovered = false;
    }

}