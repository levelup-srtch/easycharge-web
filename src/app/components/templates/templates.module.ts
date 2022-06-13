import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { HasMoreButtonComponent } from './hasmore-button/hasmore-button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HasMoreButtonComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    HasMoreButtonComponent
  ]
})
export class TemplatesModule { }
