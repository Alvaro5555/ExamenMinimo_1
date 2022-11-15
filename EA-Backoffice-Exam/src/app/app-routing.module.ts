import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { ParkingsComponent } from './components/parkings/parkings.component';
import { CreateParking2Component} from './components/create-parking2/create-parking2.component'
import { FormComponent } from './components/form/form.component';
import { FAQComponent } from './components/faq/faq.component';
import { FAQsComponent } from './components/faqs/faqs.component';
const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "parkings",
    component: ParkingsComponent
  },
  {
    path: "user",
    component: LoginComponent
  },
  {
    path: "parking",
    component: CreateParking2Component
  },
  {
    path: "newuser",
    component: FormComponent
  },
  {
    path: "faq",
    component: FAQComponent
  },
  {
    path: "faqs",
    component: FAQsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
