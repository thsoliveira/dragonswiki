import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DragonsComponent } from './dragons/dragons.component';
import { DragonDetailsComponent } from './dragons/dragon-details/dragon-details.component';
import { DragonCreationComponent } from './dragons/dragon-creation/dragon-creation.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{
		path: 'dragons',
		component: DragonsComponent,
		data: { title: 'List of Dragons' }
	 },
	 {
		path: 'dragon-details/:id',
		component: DragonDetailsComponent,
		data: { title: 'Dragon Details' }
	 },
	 {
		path: 'dragon-add',
		component: DragonCreationComponent,
		data: { title: 'Create a new Dragon' }
	 },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
