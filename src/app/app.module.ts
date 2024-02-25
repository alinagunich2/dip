import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './views/main/main.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './shared/components/popup/popup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthInterseptor } from './core/auth/auth.interseptor';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    MainComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatMenuModule

    
  ],
  providers: [
    {
      provide:MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue:{duration:2500}
    },
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterseptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
