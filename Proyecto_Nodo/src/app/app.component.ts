import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavComponent } from "./principal/nav/nav.component";
import { FooterComponent } from "./principal/footer/footer.component";
import { MainComponent } from "./principal/main/main.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        CommonModule,
        RouterOutlet,
        NgbPaginationModule,
        NgbAlertModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        NavComponent,
        FooterComponent,
        MainComponent
    ]
})
export class AppComponent {
  title = 'Nodo Travel';
}
