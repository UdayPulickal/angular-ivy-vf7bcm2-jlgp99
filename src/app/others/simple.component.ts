import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "simple",
  template: `
    You entered :{{ simpleInput }}
  `
})
export class SimpleComponent {
  @Input() simpleInput: string;

  ngOnChanges(changes: SimpleChanges) {
    for (let propertyname in changes) {
      let change = changes[propertyname];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(
        propertyname +
          ": currentvalue" +
          current +
          ", previousValue= " +
          previous
      );
    }
  }
}
