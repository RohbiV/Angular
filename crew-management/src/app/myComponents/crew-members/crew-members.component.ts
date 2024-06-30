import { Component } from '@angular/core';
import { CrewDesignationComponent } from "../crew-designation/crew-designation.component";

@Component({
    selector: 'app-crew-members',
    standalone: true,
    templateUrl: './crew-members.component.html',
    styleUrl: './crew-members.component.css',
    imports: [CrewDesignationComponent]
})
export class CrewMembersComponent {
  message:string = "Hello Crew Member this is yours designation";
  recievedMessage!:string;

  recievingMsg(message:string): void{
    this.recievedMessage = message;
  }
}
