import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeepDetailsComponent } from './components/deep-details/deep-details.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "details", component: DetailsComponent },
  { path: "details/deepDetails", component: DeepDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
