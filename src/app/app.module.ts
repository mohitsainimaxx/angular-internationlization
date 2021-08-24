import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MyCustomPipePipe } from './my-custom-pipe.pipe';
import { DmydrictDirective } from './dmydrict.directive';
import { MyGuardGuard } from './my-guard.guard';
import { Compo4Component } from './compo4/compo4.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeedbackComponent,
    Compo4Component,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [MyCustomPipePipe,MyGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
