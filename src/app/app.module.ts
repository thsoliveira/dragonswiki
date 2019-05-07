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
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
