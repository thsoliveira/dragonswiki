import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonComponent } from './dragon/dragon.component';
import { DragonDetailsComponent } from './dragon-details/dragon-details.component';
import { DragonCreationComponent } from './dragon-creation/dragon-creation.component';
import { DragonHistoriesComponent } from './dragon-histories/dragon-histories.component';

@NgModule({
  declarations: [DragonComponent, DragonDetailsComponent, DragonCreationComponent, DragonHistoriesComponent],
  imports: [
    CommonModule
  ],
  exports: [DragonComponent, DragonDetailsComponent, DragonCreationComponent, DragonHistoriesComponent]
})
export class DragonsModule { }
