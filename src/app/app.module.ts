import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TexDirective} from './directives/tex/tex.directive';
import {LagrangeService} from './services/lagrange/lagrange.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {TopbarComponent} from './components/topbar/topbar.component';
import { EquationComponent } from './components/equation/equation.component';
import { ValuesInputerComponent } from './components/values-inputer/values-inputer.component';


@NgModule({
    declarations: [
        AppComponent,
        TexDirective,
        TopbarComponent,
        EquationComponent,
        ValuesInputerComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule
    ],
    providers: [LagrangeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
