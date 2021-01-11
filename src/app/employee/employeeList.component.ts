import { Component, OnInit } from "@angular/core";
import { Iemployee } from "./employee";
import { EmployeeService } from "./employee.service";
import { UserPreferencesService } from "./userPreference.service";
@Component({
  selector: "list-employee",
  templateUrl: "employeeList.component.html",
  styleUrls: ["employeeList.component.css"]
  // providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employees: Iemployee[];
  selectedEmployeeCountRadioButton: string = "All";
  constructor(
    private _employeeservice: EmployeeService,
    private _userpreferservi: UserPreferencesService
  ) {}
  get colour(): string {
    return this._userpreferservi.colpref;
  }
  set colour(value: string) {
    this._userpreferservi.colpref = value;
  }

  ngOnInit() {
    this._employeeservice
      .getEmployees()
      .then(employeesData => (this.employees = employeesData));
  }

  getEmployeecount(): number {
    return this.employees.length;
  }
  getMaleEmployeecount(): number {
    return this.employees.filter(e => e.gender === "Male").length;
  }

  getfemaleEmployeecount(): number {
    return this.employees.filter(e => e.gender === "Female").length;
  }
  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
  // getemployees(): void {
  //   this.employees = [
  //     {
  //       code: "emp105",
  //       name: "Mary Kom",
  //       gender: "Female",
  //       annualSalary: 6500.826,
  //       dateOfBirth: "10/14/1980"
  //     },
  //     {
  //       code: "emp101",
  //       name: "Tom",
  //       gender: "Male",
  //       annualSalary: 5500,
  //       dateOfBirth: "6/25/1988"
  //     },
  //     {
  //       code: "emp102",
  //       name: "Alex",
  //       gender: "Male",
  //       annualSalary: 5700.95,
  //       dateOfBirth: "9/6/1982"
  //     },
  //     {
  //       code: "emp103",
  //       name: "Mike",
  //       gender: "Male",
  //       annualSalary: 5900,
  //       dateOfBirth: "12/8/1979"
  //     },
  //     {
  //       code: "emp104",
  //       name: "Mary",
  //       gender: "Female",
  //       annualSalary: 6500.826,
  //       dateOfBirth: "11/10/1980"
  //     }
  //   ];
  // }
  trackByempCode(index: number, employee: any): string {
    return employee.code;
  }
}
