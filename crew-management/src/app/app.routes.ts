import { Routes } from '@angular/router';
import { TwoWayComponent } from './two-way/two-way.component';
import { SignalComponent } from './signal/signal.component';
import { StructuralComponent } from './structural/structural.component';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'add-user',
        loadComponent: () => import('./admin/add-user/add-user.component').then(m=>m.AddUserComponent)
    },
    // adding routes of TwoWayComponent
    {
        path: 'two-way',             
        component: TwoWayComponent
    },
    {
        path: 'signal',
        component: SignalComponent
    },
    {
        path: 'structural',
        component: StructuralComponent
    }
];


