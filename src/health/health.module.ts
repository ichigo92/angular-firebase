import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const ROUTES: Routes = [
  { path: 'schedule', loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule) },
  { path: 'meals', loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule) },
  { path: 'workouts', loadChildren: () => import('./workouts/workouts.module').then(m => m.WorkoutsModule) }

];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class HealthModule {}
