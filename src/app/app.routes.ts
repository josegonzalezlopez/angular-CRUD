import { RouterModule, Routes} from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficos1Component } from './pages/graficos1/graficos1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
    { path: '', component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'progress', component: ProgressComponent },
            { path: 'graficos1', component: Graficos1Component},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );
