import { provideRouter, RouterConfig }  from '@angular/router';
import { ActorsComponent } from './../components/actors/actors.component';
import { DashboardComponent} from './../components/dashboard/dashboard.component';
import { ActorDetailComponent } from './../components/actor-detail/actor-detail.component';

const routes: RouterConfig = [
  {
    path: 'actors',
    component: ActorsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: ActorDetailComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
