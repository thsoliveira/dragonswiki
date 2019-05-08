import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DragonsComponent } from './dragons/dragons.component';
import { DragonDetailsComponent } from './dragons/dragon-details/dragon-details.component';
import { DragonCreationComponent } from './dragons/dragon-creation/dragon-creation.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [

	{ path: '', redirectTo: 'main', pathMatch: 'full' },
	{ path: 'main', component: DragonsComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{
		path: 'dragon-add',
		component: DragonCreationComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'dragon-details/:id',
		component: DragonDetailsComponent,
		canActivate: [AuthGuard]
	},
	// otherwise redirect to home
	{ path: '**', redirectTo: '' }

	// { path: '', redirectTo: '/login', pathMatch: s'full' },
	// { path: 'login', component: LoginComponent },
	// { path: 'register', component: RegisterComponent },
	// {
	// 	path: 'dragons',
	// 	component: DragonsComponent,
	// 	data: { title: 'List of Dragons' }
	//  },

];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
