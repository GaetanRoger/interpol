import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MaterialImportsModule} from './material-imports/material-imports.module';
import {ValuesInputerComponent} from './components/values-inputer/values-inputer.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {EquationComponent} from './components/equation/equation.component';
import {TexDirective} from './directives/tex/tex.directive';
import {FormsModule} from '@angular/forms';
import {LagrangeService} from './services/lagrange/lagrange.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MaterialImportsModule, FormsModule],
            declarations: [
                AppComponent,
                TexDirective,
                TopbarComponent,
                EquationComponent,
                ValuesInputerComponent
            ],
            providers: [LagrangeService],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
