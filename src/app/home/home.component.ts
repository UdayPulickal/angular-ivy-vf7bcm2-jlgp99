import { Component } from "@angular/core";
import { UserPreferencesService } from "../employee/userPreference.service";

@Component({
  template: `
    <h1>This is the home page</h1>
    <div>
      Colour Preference :
      <input type="text" [(ngModel)]="colour" [style.background]="colour" />
    </div>
  `
})
export class Homecomponent {
  private _userPrefServie: UserPreferencesService;

  constructor() {
    this._userPrefServie = new UserPreferencesService();
  }

  get colour(): string {
    return this._userPrefServie.colpref;
  }
  set colour(value: string) {
    this._userPrefServie.colpref = value;
  }
}
