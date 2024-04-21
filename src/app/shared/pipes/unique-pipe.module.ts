import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UniquePipe } from './unique.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [UniquePipe],
  exports: [UniquePipe],
})
export class UniquePipeModule {}
