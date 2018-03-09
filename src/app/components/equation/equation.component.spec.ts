import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EquationComponent} from './equation.component';
import {MaterialImportsModule} from '../../material-imports/material-imports.module';
import {TexDirective} from '../../directives/tex/tex.directive';

describe('EquationComponent', () => {
    let component: EquationComponent;
    let fixture: ComponentFixture<EquationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MaterialImportsModule],
            declarations: [EquationComponent, TexDirective]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EquationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
