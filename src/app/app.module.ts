import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatTableModule, MatSortModule, MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';

import { DragonsModule } from './dragons/dragons.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/initial';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DragonsReducer } from './state/dragons/dragons.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DragonsEffects } from './state/dragons/dragons.effects';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { RegisterComponent } from './register/register.component';
import { ModalComponent } from './_components/modal/modal.component';
import { environment } from 'environments/environment';
import { fakeBackendProvider } from './_helpers';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		ModalComponent,
		RegisterComponent,
		HeaderComponent,
		FooterComponent
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
		HttpModule,
		MatIconModule,
		MatToolbarModule,
		MatTableModule,
		MatSortModule,
		MatProgressSpinnerModule,
		AppRoutingModule,
		ConfirmDialogModule,
		ToastrModule.forRoot(),
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
	exports: [
		ModalComponent
	],
	providers: [
		ConfirmationService,

		// provider used to create fake backend
		fakeBackendProvider
	],
	entryComponents: [
		ModalComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
