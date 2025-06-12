import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', title: 'Home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), data: { nav: true } },
    { path: 'about', title: 'About', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent), data: { nav: true } },
    { path: 'optional', title: 'Optional', loadComponent: () => import('./optional/optional.component').then(m => m.OptionalComponent), data: { nav: true } },
    { path: 'self', title: 'Self', loadComponent: () => import('./self/self.component').then(m => m.SelfComponent), data: { nav: true } },
    { path: 'self-optional', title: 'Self Optional', loadComponent: () => import('./self-optional/self-optional.component').then(m => m.SelfOptionalComponent), data: { nav: true } },
    { path: 'skip-self', title: 'Skip Self', loadComponent: () => import('./skip-self-parent/skip-self-parent.component').then(m => m.SkipSelfParentComponent), data: { nav: true } },
    { path: 'host-resolution', title: 'Host Resolution', loadComponent: () => import('./host-resolution/host-resolution.component').then(m => m.HostResolutionComponent), data: { nav: true } },
    { path: 'use-class', title: 'Use Class', loadComponent: () => import('./use-class/use-class.component').then(m => m.UseClassComponent), data: { nav: true } },
    { path: 'use-existing', title: 'Use Existing', loadComponent: () => import('./use-existing/use-existing.component').then(m => m.UseExistingComponent), data: { nav: true } },
    { path: 'use-value', title: 'Use Value', loadComponent: () => import('./use-value/use-value.component').then(m => m.UseValueComponent), data: { nav: true } },
    { path: 'injection-token', title: 'Injection Token', loadComponent: () => import('./injection-token/injection-token.component').then(m => m.InjectionTokenComponent), data: { nav: true } },
    { path: 'use-factory', title: 'Use Factory', loadComponent: () => import('./use-factory/use-factory.component').then(m => m.UseFactoryComponent), data: { nav: true } },
    { path: '**', title: 'Not Found', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent), data: { nav: false } },
];
