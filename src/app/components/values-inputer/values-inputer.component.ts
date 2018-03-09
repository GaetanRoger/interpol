import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-values-inputer',
    templateUrl: './values-inputer.component.html',
    styleUrls: ['./values-inputer.component.css']
})
export class ValuesInputerComponent implements OnInit {
    @Output()
    valuesChanged = new EventEmitter<{ x: number | null; y: number | null }[]>();

    private values: { x: number | null; y: number | null }[] = [
        {
            x: null,
            y: null
        },
        {
            x: null,
            y: null
        }
    ];


    constructor() {
    }

    ngOnInit() {
    }

    private add() {
        this.values.push({x: null, y: null});
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

}
