import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DragonDetailsComponent } from './dragon-details/dragon-details.component';
import { DragonCreationComponent } from './dragon-creation/dragon-creation.component';
import { DragonsComponent } from './dragons.component';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule, MatTableModule, MatSortModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { TableModule } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DragonEditComponent } from './dragon-edit/dragon-edit.component';

@NgModule({
	declarations: [
		DragonsComponent,
		DragonDetailsComponent,
		DragonCreationComponent,
		DragonEditComponent,
	],
	imports: [
		CommonModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		MatTableModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		RouterModule,
		ReactiveFormsModule,
		TableModule,
		ConfirmDialogModule,
		MatDialogModule
	],
	exports: [DragonDetailsComponent, DragonCreationComponent,  MatDialogModule, DragonEditComponent],
	providers: [
		ConfirmationService
	],
	entryComponents: [
		DragonEditComponent
	]
})
export class DragonsModule { }
