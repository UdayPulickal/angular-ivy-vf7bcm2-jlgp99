import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeListComponent } from "./employee/employeeList.component";
import { EmployeeTitlePipe } from "./employee/employee.title.pipe";
import { EmployeeCountComponent } from "./employee/employeeCount.component";
import { SimpleComponent } from "./others/simple.component";
import { Homecomponent } from "./home/home.component";
import { PageNotFoundComponent } from "./others/PageNotFound.component";

const appRoutes: Routes = [
  { path: "home", component: Homecomponent },
  { path: "employee", component: EmployeeListComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    SimpleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
