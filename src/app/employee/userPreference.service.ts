import { Injectable } from "@angular/core";

@Injectable()
export class UserPreferencesService {
  constructor() {
    console.log("new instance created");
  }
  colpref: string = "orange";
}
