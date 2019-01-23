import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

//Rutas
import { PAGES_ROUTES } from './pages.routes';

//Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

@NgModule({
	declarations: [
		PagesComponent,
		DashboardComponent,
		ProgressComponent,
		Graficas1Component
	],
	exports: [ //En esta sección se declaran los componentes que van a ser utilizados por componentes externos
		PagesComponent,
		DashboardComponent,
		ProgressComponent,
		Graficas1Component
	],
	imports: [
		SharedModule,
		PAGES_ROUTES
	]
})

export class PagesModule { }