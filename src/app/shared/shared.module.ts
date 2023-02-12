import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



const sharedModules = [
  //Angular
  CommonModule,
  FlexLayoutModule,
  //shared
  //Material
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
];


@NgModule({
  declarations: [
  ],
  imports: [...sharedModules],
  exports: [...sharedModules],
  providers: [
  ],
})
export class SharedModule {}
