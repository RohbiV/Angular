import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  userName:string = "Vasu";
  anchor:string = "https://www.w3schools.com";

  clicked() {
    console.log("you just clicked a button!");
  }
}
