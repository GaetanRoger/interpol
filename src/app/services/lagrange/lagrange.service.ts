import {Injectable} from '@angular/core';
import {GenerateEquationOptions} from './generate-equation-options';

@Injectable()
export class LagrangeService {

    private defaultGenerateEquationOptions: GenerateEquationOptions = {
        x: 'x',
        calculateDenominator: false,
        addName: false,
        name: '\\Pi'
    };

    constructor() {
    }

    /**
     * Generate the LATEX equation to be displayed.
     */
    generateEquation(
        values: { x: number, y: number }[],
        options: GenerateEquationOptions): string {
        options = {...this.defaultGenerateEquationOptions, ...options};
        console.log(options);

        const x = options.x;
        const calculateDenominator = options.calculateDenominator;

        // For all values, we want to compute its fraction
        const fracs: { x: number, frac: string }[] = values.map(value => {
            // We retrieve all values except the one we are currently computing
            const otherValues = values.filter(v => v.x !== value.x);


            // Top part of the fraction
            let top = '';

            // Bottom part of the fraction (denominator)
            // value is used to compute the value of the denominator
            const bottom = {str: '', value: 1};


            // Concatenate the top parts of the fraction
            otherValues.forEach(filtered => top += ' \\left( ' + x + ' - ' + filtered.x + ' \\right) ');

            // Concatenate and calculate the bottom part of the fraction
            otherValues.forEach(filtered => {
                bottom.str += ' \\left( ' + value.x + ' - ' + filtered.x + ' \\right) ';
                bottom.value *= value.x - filtered.x;
            });


            // Create the final fraction string
            const denominator = calculateDenominator ? bottom.value : bottom.str;
            return {x: value.x, frac: '\\frac {' + top + '}{' + denominator + '}'};
        });

        // Append the Ys values to the fractions
        const fracAndYs: string[ ] = values.map(value => {
            return value.y + ' \\times ' + fracs.find(frac => frac.x === value.x).frac;
        });

        // Concatenate all fractions
        const fullEquation = fracAndYs.join('+');

        // If a name is desired, adds it and return the full equation
        if (options.addName) {
            return options.name + '_{' + values.length + '} (' + options.x + ') = ' + fullEquation;
        } else {
            return fullEquation;
        }
    }

    computeEquation(
        values: { x: number, y: number }[],
        x: number
    ): number {
        const fracs: { x: number; value: number; }[] = values.map(value => {
            // We retrieve all values except the one we are currently computing
            const otherValues = values.filter(v => v.x !== value.x);


            // Top part of the fraction
            let top = 1;

            // Bottom part of the fraction (denominator)
            let bottom = 1;


            // Concatenate the top parts of the fraction
            otherValues.forEach(filtered => top *= x - filtered.x);

            // Concatenate and calculate the bottom part of the fraction
            otherValues.forEach(filtered => bottom *= value.x - filtered.x);


            // Create the final fraction string
            return {x: value.x, value: top / bottom};
        });
        const fracsAndYs: number[] = values.map(value => {
            return value.y * fracs.find(frac => frac.x === value.x).value;
        });

        return fracsAndYs.reduce((pre, curr) => pre + curr);
    }
}
