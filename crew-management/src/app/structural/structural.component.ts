import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {
  a = 4;
  b = 2;
  myArray = [1,2,3,4,5,6,7];
  isActive = false;
  name?:string;

  toggleBtn() {
    this.isActive = !this.isActive;
  }

}
