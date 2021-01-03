import { Component } from "@angular/core";

@Component({
  selector: "my-employee",
  templateUrl: "employee.component.html",
  styleUrls: ["employee.component.css"]
})
export class EmployeeComponent {
  columnspan: number = 2;
  firstName: string = "Tom";
  lastName: string = "Hopkins";
  gender: string = "Male";
  age: Number = 20;
  showdetails: boolean = false;

  toggleDetails(): void {
    this.showdetails = !this.showdetails;
  }
}
