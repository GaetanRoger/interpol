import {AfterContentChecked, Component} from '@angular/core';
import {LagrangeService} from './services/lagrange/lagrange.service';
import {GenerateEquationOptions} from './services/lagrange/generate-equation-options';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
    /**
     * LaTeX equation to be displayed.
     */
    equation: string;

    /**
     * Actual result of the equation after being calculated.
     */
    result: number;

    /**
     * Values to use for the equation.
     * @type {x: number|null; y: number|null}[]
     */
    values: { x: number; y: number }[] = [
        {
            x: null,
            y: null
        },
        {
            x: null,
            y: null
        }
    ];

    options: GenerateEquationOptions = {
        multiline: false,
        calculateDenominator: false,
        x: 'x',
        name: '\\Pi',
        addName: true,
        addDegreeToName: true,
        addMethodToName: true
    };

    x: number;

    get forXEquals() {
        return '\\ \\ \\ \\ \\ \\ \\text{pour } ' + this.options.x + '=' + this.x;
    }

    constructor(readonly lagrange: LagrangeService) {
    }

    private static clearValues(values: { x: number; y: number }[]): { x: number; y: number }[] {
        return values.filter(v => v.x && v.y);
    }

    //
    // LIFECYCLE HOOKS
    //

    ngAfterContentChecked(): void {
        this.updateEquation(AppComponent.clearValues(this.values));
    }

    //
    // EVENTS
    //

    private add() {
        this.values.push({x: null, y: null});
        console.log('values', this.values);
    }

    private remove(value) {
        this.values = this.values.filter(v => v.x !== value.x || v.y !== value.y);

        while (this.values.length < 2) {
            this.values.push({x: null, y: null});
        }
    }

    private onKeyDown(key: string, e: KeyboardEvent) {
        if (key === 'Tab' && !e.ctrlKey) {
            if (this.values.find(v => !v.x && !v.y) === undefined) {
                this.values.push({x: null, y: null});
            }
        }
    }


    //
    // UTILS METHODS
    //

    private updateEquation(values: { x: number; y: number }[]) {
        this.equation = this.lagrange.generateEquation(values, {
            ...{
                addName: true,
            }, ...this.options
        });

        this.result = this.lagrange.computeEquation(values, this.x);
    }
}
