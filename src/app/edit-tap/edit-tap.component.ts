import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from '../models/taproom.model';

@Component({
  selector: 'app-edit-tap',
  templateUrl: './edit-tap.component.html',
  styleUrls: ['./edit-tap.component.css']
})
export class EditTapComponent {

@Input() childSelectedTap: Tap;
@Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }
}
