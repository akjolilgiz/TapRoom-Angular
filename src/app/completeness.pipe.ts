import {Pipe, PipeTransform} from '@angular/core';
import {Tap} from './models/taproom.model';
@Pipe({
  name: "completeness",
  pure: false
})


export class CompletenessPipe implements PipeTransform {
  transform(input: Tap[], desiredCompleteness) {
    var output: Tap[] = [];
    if(desiredCompleteness === "incompleteTaps") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "completeTaps") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
