import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div style="padding:5px">
      <ul class="nav nav-tabs">
        <li><a routerLink="home">Home</a></li>
        <li> <a routerLink="employee">Employees</a>
        </li>
      </ul>
      <br/>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  userText: string = "Pragim";
}
