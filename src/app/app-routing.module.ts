import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

//Aqui coloco las rutas
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
    canActivate: [AuthGuard],
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    pathMatch:'full',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard/dashboard.module').then((m) => m.DashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
