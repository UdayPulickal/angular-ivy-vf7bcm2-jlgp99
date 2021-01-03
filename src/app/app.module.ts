import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EmployeeComponent } from "./employee.component";
import { EmployeeListComponent } from "./employeeList.component";
import { EmployeeTitlePipe } from "./employee.title.pipe";
import { EmployeeCountComponent } from "./employeeCount.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
