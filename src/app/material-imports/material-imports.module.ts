import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatCheckboxModule
    ],
    declarations: [],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatCheckboxModule
    ]
})
export class MaterialImportsModule {
}
