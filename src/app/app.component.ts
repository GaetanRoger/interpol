import {AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LagrangeService} from './services/lagrange/lagrange.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {
    private equation: string;
    private values: { x?: number; y?: number }[] = [
        {
            x: 5,
            y: null
        }
    ];

    constructor(readonly lagrange: LagrangeService) {
    }

    add() {
        this.values.push({x: null, y: null});
        console.log('values', this.values);
    }

    ngOnInit(): void {
        const values = [
            {
                x: 1,
                y: -2
            },
            {
                x: 4,
                y: 1
            },
            {
                x: 6,
                y: 2
            }
        ];
        this.updateEquation(values);
    }

    ngAfterContentChecked(): void {
        this.updateEquation(this.clearValues(this.values));
    }


    private updateEquation(values: { x: number; y: number }[]) {
        this.equation = this.lagrange.generateEquation(values, {
            calculateDenominator: true,
            addName: true,
            x: '5'
        });

        this.equation += ' = ' + this.lagrange.computeEquation(values, 5);
    }

    private clearValues(values: { x?: number; y?: number }[]): { x: number; y: number }[] {
        return values.filter(v => v.x && v.y);
    }
}
