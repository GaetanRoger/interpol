import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ValuesInputerComponent} from './values-inputer.component';
import {MaterialImportsModule} from '../../material-imports/material-imports.module';
import {FormsModule} from '@angular/forms';

describe('ValuesInputerComponent', () => {
    let component: ValuesInputerComponent;
    let fixture: ComponentFixture<ValuesInputerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MaterialImportsModule, FormsModule],
            declarations: [ValuesInputerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ValuesInputerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
