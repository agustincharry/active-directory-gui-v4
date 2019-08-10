import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestInSessionComponent } from './components/test-in-session/test-in-session.component';
import { HomeComponent } from './components/home/home.component';
import { ActiveDirectoryModule } from './modules/active-directory/active-directory.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TestInSessionComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveDirectoryModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
