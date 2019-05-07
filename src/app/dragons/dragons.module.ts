import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DragonDetailsComponent } from './dragon-details/dragon-details.component';
import { DragonCreationComponent } from './dragon-creation/dragon-creation.component';
import { DragonsComponent } from './dragons.component';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule, MatTableModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
	declarations: [ 
		DragonsComponent, 
		DragonDetailsComponent, 
		DragonCreationComponent,
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
		ReactiveFormsModule
	],
	exports: [ DragonDetailsComponent, DragonCreationComponent ]
})
export class DragonsModule { }
