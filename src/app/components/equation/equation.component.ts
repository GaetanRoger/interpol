import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-equation',
    templateUrl: './equation.component.html',
    styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
    @Input()
    private equation: string;

    @Input()
    private result: number;

    @Input()
    private xLabel: string;

    @Input()
    private xValue: number;

    get forXEquals() {
        return '\\ \\ \\ \\ \\ \\ \\text{pour } ' + this.xLabel + '=' + this.xValue;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
