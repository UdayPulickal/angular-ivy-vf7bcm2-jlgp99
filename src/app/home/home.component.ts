import { Component } from "@angular/core";
import { UserPreferencesService } from "../employee/userPreference.service";

@Component({
  template: `
    <h1>This is the home page</h1>
    <div>
      Colour Preference :
      <input type="text" (ngModel)="(Colour)" [style.background]="Colour" />
    </div>
  `
})
export class Homecomponent {
  constructor(private _userPrefServie: UserPreferencesService) {}

  get Colour(): string {
    return this._userPrefServie.colpref;
  }
  set Colour(value: string) {
    this._userPrefServie.colpref = value;
  }
}
