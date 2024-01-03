import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  // Link do RemoteEntry na aws
  {
    path: 'outroappp',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://angular-teste-mf.s3.amazonaws.com/remoteEntry.js',
        exposedModule: './WeatherWidgetModule',
      }).then((m) => m.WeatherWidgetModule),
  },
  // Link do RemoteEntry rodando aplicacao local
  // {
  //   path: 'outroappp',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:5100/remoteEntry.js',
  //       exposedModule: './WeatherWidgetModule',
  //     }).then((m) => m.WeatherWidgetModule),
  // },

  {
    path: '**',
    redirectTo: '',
  },
];
