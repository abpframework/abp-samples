import { RoutesService, eLayoutType } from '@abp/ng.core';
import { provideAppInitializer, inject } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  provideAppInitializer(() => {
    configureRoutes();
  }),
];

function configureRoutes() {
  const routes = inject(RoutesService);
  routes.add([
    {
      path: '/',
      name: '::Menu:Home',
      iconClass: 'fas fa-home',
      order: 1,
      layout: eLayoutType.application,
    },
    {
      path: '/books',
      name: '::Menu:Books',
      iconClass: 'fas fa-book',
      layout: eLayoutType.application,
      requiredPolicy: 'GymWorkoutPlanner.Books',
    },
    {
      path: '/exercises',
      name: '::Menu:Exercises',
      iconClass: 'fas fa-dumbbell',
      layout: eLayoutType.application,
      requiredPolicy: 'GymWorkoutPlanner.Exercises',
    },
    {
      path: '/workout-plans',
      name: '::Menu:WorkoutPlans',
      iconClass: 'fas fa-list-check',
      layout: eLayoutType.application,
      requiredPolicy: 'GymWorkoutPlanner.WorkoutPlans',
    },
  ]);
}
