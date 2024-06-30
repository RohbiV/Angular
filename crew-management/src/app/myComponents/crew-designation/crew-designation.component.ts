import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-crew-designation',
  standalone: true,
  imports: [],
  templateUrl: './crew-designation.component.html',
  styleUrl: './crew-designation.component.css'
})
export class CrewDesignationComponent {
  @Input() message!:string;
  @Output() msgEvent = new EventEmitter<string>();

  sendMsg() {
    this.msgEvent.emit("Hello from child to parent!");
  }
}
