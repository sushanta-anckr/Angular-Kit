import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';

export const routes: Routes = [
    {path:'',redirectTo:'sign-in',pathMatch:'full'},
    {path:'sign-in',component:SigninComponent},
    {path:'sign-up',component:SignupComponent},
    {path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent,
                canActivate:[authGuard]
            },
            {
                path:'home',
                component:HomeComponent,
                canActivate:[authGuard]
            },
            {
                path:'all-users',
                component:AllUsersComponent,
                canActivate:[authGuard]
            },
        ]
    }
];
