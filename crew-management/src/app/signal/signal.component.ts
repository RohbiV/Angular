import { Component, Injector, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  // creating signals
  counter = signal(0);
  username = signal('');
  users = signal([
    'Thakur',
    'Vibhor',
    'Vatsa'
  ]);
  achieve = signal({
    project:"Skin disease detection using cnn",
    tech:"ML"
  });

  setCounter() {     // for updating the signal value
    this.counter.set(40);
    this.counterEffect();
  }

  updateCounter() {      // for getting computed value
    this.counter.update(counter=>counter + 50);
  }

  constructor(private injector: Injector) {

  }

  counterEffect() : void {
    effect(()=>{  
      console.log("Value of counter: " +  this.counter);
    },{ injector: this.injector})
  }
}
