import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
	declarations: [
		NopagefoundComponent,
		HeaderComponent,
		SidebarComponent,
		BreadcrumbsComponent
	],
	exports: [ //En esta sección se declaran los componentes que van a ser utilizados por componentes externos
		NopagefoundComponent,
		HeaderComponent,
		SidebarComponent,
		BreadcrumbsComponent
	]
})

export class SharedModule { }