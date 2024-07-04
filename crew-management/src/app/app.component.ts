import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { CrewMembersComponent } from "./myComponents/crew-members/crew-members.component";
import { UsersModule } from './users/users.module';
import { HighlightDirective } from './highlight.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MatButtonModule, CrewMembersComponent,UsersModule,HighlightDirective]
})
export class AppComponent {
  title = 'crew-management';
}
