import { Component } from "@angular/core";
@Component({
  selector: "list-employee",
  templateUrl: "employeeList.component.html",
  styleUrls: ["employeeList.component.css"]
})
export class EmployeeListComponent {
  employees: any[];
  selectedEmployeeCountRadioButton: string = "All";
  constructor() {
    this.employees = [
      {
        code: "emp101",
        name: "Tom",
        gender: "Male",
        annualSalary: 5500,
        dateOfBirth: "6/25/1988"
      },
      {
        code: "emp102",
        name: "Alex",
        gender: "Male",
        annualSalary: 5700.95,
        dateOfBirth: "9/6/1982"
      },
      {
        code: "emp103",
        name: "Mike",
        gender: "Male",
        annualSalary: 5900,
        dateOfBirth: "12/8/1979"
      },
      {
        code: "emp104",
        name: "Mary",
        gender: "Female",
        annualSalary: 6500.826,
        dateOfBirth: "10/14/1980"
      },
      {
        code: "emp105",
        name: "Mercy Kom",
        gender: "Female",
        annualSalary: 6500.826,
        dateOfBirth: "10/14/1980"
      },
      {
        code: "emp106",
        name: "Steve",
        gender: "Male",
        annualSalary: 6580.826,
        dateOfBirth: "11/12/1985"
      }
    ];
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
