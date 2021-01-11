import { Injectable } from "@angular/core";
import { Iemployee } from "./employee";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class EmployeeService {
  constructor(private _http: Http) {}
  getEmployees(): Observable<Iemployee[]> {
    // To convert Observable<Response> to Observable<IEmployee[]>
    // we are using the map operator
    return this._http
      .get("http://localhost:8080/Demorestapi/rest/aliens")
      .pipe(map((response: Response) => <Iemployee[]>response.json()));
  }

  getEmployeeBycode(empcode: string): Promise<Iemployee> {
    // To convert Observable<Response> to Observable<IEmployee[]>
    // we are using the map operator
    return this._http
      .get("http://localhost:8080/Demorestapi/rest/aliens/alien/" + empcode)
      .pipe(map((response: Response) => <Iemployee>response.json()))
      .toPromise();
  }
}
