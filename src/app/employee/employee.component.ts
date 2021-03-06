import { Component, OnInit } from "@angular/core";
import { Iemployee } from "./employee";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "./employee.service";
import { UserPreferencesService } from "./userPreference.service";
import {
  map,
  catchError,
  take,
  retry,
  retryWhen,
  delay,
  scan
} from "rxjs/operators";

@Component({
  selector: "my-employee",
  templateUrl: "employee.component.html",
  styleUrls: ["employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  employee: Iemployee;
  statusMessage: string = "Loading Data. Please Wait......";
  retryCount: number = 1;

  constructor(
    private _employeeService: EmployeeService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _userpref: UserPreferencesService
  ) {}

  get colour(): string {
    return this._userpref.colpref;
  }
  set colour(value: string) {
    this._userpref.colpref = value;
  }

  onBackButtonclick(): void {
    this._router.navigate(["/employee"]);
  }

  ngOnInit() {
    let empcode: string = this._activatedRoute.snapshot.params["code"];
    this._employeeService.getEmployeeBycode(empcode).subscribe(
      employeeData => {
        if (employeeData == null) {
          this.statusMessage = "Employee with specified empcode does not exist";
        } else {
          this.employee = employeeData;
        }
      },
      error => {
        this.statusMessage = "Problem with the service. Try after some time";
        console.log(error);
      }
    );
  }
}
