import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from '../models/taproom.model';

@Component({
  selector: 'app-tap-list',
  templateUrl: './tap-list.component.html',
  styleUrls: ['./tap-list.component.css']
})
export class TapListComponent {
    @Input() childTapList: Tap[];
    @Output() clickSender = new EventEmitter();
    editButtonClicked(tapToEdit: Tap) {
      this.clickSender.emit(tapToEdit);
    }
    filterByCompleteness: string = "incompleteTaps";

    pintColor(currentTap){
      if (currentTap.pint <= 10){
        return "bg-danger";
      } else if (currentTap.pint <= 70 && currentTap.pint > 10) {
        return  "bg-warning";
      } else {
        return "bg-success";
      }
    }
    priceColor(currentTap){
      if (currentTap.price >= 20){
        return "bg-danger";
      } else if (currentTap.price < 20 && currentTap.price > 10) {
        return  "bg-warning";
      } else {
        return "bg-info";
      }
    }
    fillTap(currentTap){
      currentTap.pint = 124;
    }

    sale(currentTap){
      currentTap.price *= .5;
    }

    sellTap(currentTap){
      currentTap.pint--;
    }

    sellGrowler(currentTap){
      currentTap.pint-=2;
    }

    sellBigGrowler(currentTap){
      currentTap.pint-=5;
    }

    delete(currentTap) {
      let index = this.childTapList.indexOf(currentTap);
      this.childTapList.splice(index, 1);
    }
    onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
    }
    toggleDone(clickedTap: Tap, setCompleteness: boolean) {
      clickedTap.done = setCompleteness;

    }

}
