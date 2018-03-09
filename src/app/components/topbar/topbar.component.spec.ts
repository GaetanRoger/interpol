import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopbarComponent} from './topbar.component';
import {MaterialImportsModule} from '../../material-imports/material-imports.module';

describe('TopbarComponent', () => {
    let component: TopbarComponent;
    let fixture: ComponentFixture<TopbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MaterialImportsModule],
            declarations: [TopbarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
