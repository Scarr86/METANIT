import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[bold]',

    // Альтернатива @HostListener
    host: {
        '(mousedown)': 'onMouseDown()',
        '(mouseup)': 'onMouseUp()'
    }
})
export class BoldDirective {

    //Получение параметров в Дерективе
    @Input("bold") selectedSize = '18px';
    @Input() defaultSize = '16px';
    private fontSize: string;


    private textColor = 'black';
    private background = 'white';// wheat


    constructor(private el: ElementRef, private rederer: Renderer2) {
        // this.rederer.setStyle(this.el.nativeElement, "font-weight","bold");
        // this.rederer.setStyle(this.el.nativeElement, "color", "tomato");
        this.rederer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    }
    //Альтернатива
    // constructor(private elementRef: ElementRef) {
    //     this.elementRef.nativeElement.style.fontWeight = 'bold';
    //     this.elementRef.nativeElement.style.color = 'tomato';
    //     this.elementRef.nativeElement.style.cursor = 'pointer';
    // }
/************************************************************ */
    //Получение параметров в Дерективе
    ngOnInit(){
        this.fontSize = this.defaultSize;
    }
    @HostBinding('style.fontSize') get getFontSize(){
        return this.fontSize;
    }
    //в  @HostListener("mouseenter") и  @HostListener("mouseleave")
    // меняем значение this.fontSize


/***************************************************************** */
    @HostBinding('style.background') get getBackground() {
        return this.background;
    }
    
    @HostListener("dblclick") ondblclick() {//Используем @HostBinding
        this.background = this.background === 'white' ? 'wheat' : 'white';
    }
/************************************************************************** */
    //rederer
    //@HostListener
    @HostListener("mouseenter") onMouseEnter() {
        this.setFontWeight('bold');// ипользования  rederer 
        this.fontSize = this.selectedSize;
    }
    @HostListener("mouseleave") onMouseLeave() {
        this.setFontWeight('normal'); // ипользования  rederer 
        this.fontSize = this.defaultSize;
    }
    private setFontWeight(val: string) {
        this.rederer.setStyle(this.el.nativeElement, "font-weight", val);
    }
/************************************************************************** */
    // host
    @HostBinding("style.color") get getTextColor() {
        return this.textColor;
    }
    onMouseDown() {// В декораторе прописан host
        this.textColor = 'tomato';
    }
    onMouseUp() {// В декораторе прописан host
        this.textColor = 'black';
    }
/*********************************************************************** */

}