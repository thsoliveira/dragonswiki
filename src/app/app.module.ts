import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatTableModule, MatSortModule, MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { DragonsModule } from './dragons/dragons.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { DragonsEffects } from './state/dragons/dragons.effects';
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		DragonsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		HttpClientModule,
		MatIconModule,
		MatToolbarModule,
		MatTableModule,
		MatSortModule,
		MatProgressSpinnerModule,
		AppRoutingModule
		ConfirmDialogModule,
		StoreModule.forFeature('dragons', DragonsReducer),
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			name: 'Arcanum',
			maxAge: 25,
			logOnly: environment.production,
		}),
		EffectsModule.forRoot([]),
		EffectsModule.forFeature([DragonsEffects]),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
