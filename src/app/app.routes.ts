import { Routes } from '@angular/router';
import { SolarLink } from './pages/solar-link/solar-link';
import { PortfolioComponent } from './pages/iqraa/iqraa';
import { NotFound } from './pages/not-found/not-found';
export const routes: Routes = [
    { path: '', redirectTo: 'solar-link', pathMatch: 'full'},
    { path: 'solar-link', component: SolarLink},
    { path: 'hya-naqraa', component: PortfolioComponent},
    { path: '**', component: NotFound},
];
