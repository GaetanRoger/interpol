import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TexDirective} from './directives/tex/tex.directive';
import {LagrangeService} from './services/lagrange/lagrange.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        TexDirective,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ],
    providers: [LagrangeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
