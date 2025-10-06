import { Routes } from '@angular/router';
import { LandingPage } from './views/landing-page/landing-page';
import { Pricing } from './views/pricing/pricing';
import { Contact } from './views/contact/contact';

export const routes: Routes = [
    {
        path: 'landing',
        component: LandingPage
    },
    {
        path: 'pricing',
        component: Pricing
    },{
        path: 'contact',
        component: Contact
    },
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: '**', redirectTo: '/landing', pathMatch: 'full' }
];
