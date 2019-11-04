import { NgModule } from '@angular/core';

// RUTAS
import { PAGES_ROUTES } from './pages.routes';

// MODULOS
import { SharedModule } from '../shared/share.module';

// COMPONENTES
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficos1Component } from './graficos1/graficos1.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficos1Component
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficos1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}
