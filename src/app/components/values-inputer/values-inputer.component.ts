import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-values-inputer',
    templateUrl: './values-inputer.component.html',
    styleUrls: ['./values-inputer.component.css']
})
export class ValuesInputerComponent implements OnInit {
    //
    // CONSTS
    //

    private readonly DEFAULT_VALUES: { x: number | null; y: number | null }[] = [
        {
            x: null,
            y: null
        },
        {
            x: null,
            y: null
        }
    ];


    //
    // INPUT/OUTPUT
    //

    @Output()
    valuesChanged = new EventEmitter<{ x: number | null; y: number | null }[]>();

    @Output()
    xValueChanged = new EventEmitter<number>();


    //
    // PROPERTIES
    //

    values: { x: number | null; y: number | null }[] = this.DEFAULT_VALUES;

    xValue: number;


    //
    // CONSTRUCTOR
    //

    constructor() {
    }


    //
    // LIFECYCLE HOOKS
    //

    ngOnInit() {
    }


    //
    // METHODS CALLED FROM VIEW
    //

    add() {
        this.values.push({x: null, y: null});
    }

    remove(value) {
        this.values = this.values.filter(v => v.x !== value.x || v.y !== value.y);

        while (this.values.length < 2) {
            this.values.push({x: null, y: null});
        }
    }

    onKeyDown(key: string, e: KeyboardEvent, index: number) {
        // Checking only Tab is pressed
        if (key === 'Tab' && !e.ctrlKey && !e.shiftKey) {
            // Checking we are on the last line and there is no line with empty values
            if (index === this.values.length - 1 && this.values.find(v => !v.x && !v.y) === undefined) {
                this.values.push({x: null, y: null});
            }
        }
    }

    generateSubFromIndex(index: number): string {
        if (index < 10) {
            return String.fromCharCode(parseInt('208' + index, 16));
        }

        return index.toString();
    }

    allowOnlyNumber(e: KeyboardEvent) {
        if (isNaN(parseInt(e.key, 10))) {
            e.preventDefault();
        }
    }

    reset() {
        this.values.forEach(v => this.remove(v));
        this.xValue = undefined;

        this.valuesChanged.emit(this.values);
        this.xValueChanged.emit(this.xValue);

    }
}
