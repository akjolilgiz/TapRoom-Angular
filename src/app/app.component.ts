import { Component } from '@angular/core';
import { Tap } from './models/taproom.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tap Room';
  pint = 124;
  masterTapList: Tap[] = [
    new Tap('KillerVodka', 'Proper 12', 15, 40, 'Strawberry'),
    new Tap('DrinkAndFight', 'Chans', 25, 80, 'Alcohol'),
    new Tap('ChansKimchiSmallCocktail', 'Fake Korean Jesus', 10, 90, 'Kimchi')
  ];
  selectedTap = null;
  editTap(clickedTap) {
    this.selectedTap = clickedTap;
  }

  finishEdit() {
    this.selectedTap = null;

  }
  addTap(newTap: Tap) {
    this.masterTapList.push(newTap)
  }



}
