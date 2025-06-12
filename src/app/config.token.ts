import { InjectionToken } from '@angular/core';

export interface AppConfig {
    expermientalEnabled: boolean;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
    providedIn: 'root',
    factory: () => ({
        expermientalEnabled: true
    })
});
