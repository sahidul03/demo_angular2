import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { CarsComponent } from './components/cars/cars.component';

const AppRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'cars',
        component: CarsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);