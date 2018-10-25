import { Component, Output, EventEmitter } from '@angular/core';
import { Tap } from '../models/taproom.model';

@Component({
  selector: 'app-new-tap',
  templateUrl: './new-tap.component.html',
  styleUrls: ['./new-tap.component.css']
})
export class NewTapComponent {
  @Output() sendTap = new EventEmitter();
    doneAdding(title: string, brand: string, price: string, content: string, flavor: string) {
    let newTap: Tap = new Tap(title, brand, parseInt(price), parseInt(content), flavor);
    this.sendTap.emit(newTap);
  }
}
