import { Routes } from "@angular/router";
import { AboutUsLayoutComponent } from "./layouts/about-us-layout/about-us-layout.component";
import { AboutUsPageComponent } from "./pages/about-us-page/about-us-page.component";


export const routes: Routes = [
  {
    path: '',
    component: AboutUsLayoutComponent,
    children: [
      {
        path: '',
        component: AboutUsPageComponent
      }
    ]
  }
]

export default routes;
