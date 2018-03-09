///<reference path="../../../../node_modules/@types/mathjax/index.d.ts"/>
import {Directive, ElementRef, Input, OnChanges, OnInit} from '@angular/core';

@Directive({
    selector: '[appTex]'
})
export class TexDirective implements OnInit, OnChanges {
    @Input() appTex = '';

    constructor(private element: ElementRef) {
    }

    static tellMathJaxToRefresh(element: ElementRef) {
        try {
            MathJax.Hub.Queue(['Typeset', MathJax.Hub, element.nativeElement]);
        } catch (e) {
            if (e instanceof ReferenceError) {
                // MathJax can be undefined when starting, so nothing to worry about
            } else {
                throw e;
            }
        }
    }

    ngOnInit() {
        this.update();
    }

    ngOnChanges() {
        this.update();
    }

    update() {
        this.element.nativeElement.innerHTML = '$$' + this.appTex + '$$';
        TexDirective.tellMathJaxToRefresh(this.element);

    }
}
