import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { TwoComponent } from './components/two/two.component';

const routes: Routes = [
  {
    path: 'search',
    component: TwoComponent
  },
  {
    path: 'login',
    component: FirstComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
