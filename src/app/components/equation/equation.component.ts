import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-equation',
    templateUrl: './equation.component.html',
    styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
    @Input()
    equation: string;

    @Input()
    result: number;

    @Input()
    xLabel: string;

    @Input()
    xValue: number;

    @Input()
    multiline: boolean;

    get forXEquals() {
        return '\\ \\ \\ \\ \\ \\ \\text{pour } ' + this.xLabel + '=' + this.xValue;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
