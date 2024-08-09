import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ListComponent } from './list/list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'user/:id', component: UserDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserDetailsComponent,
    
    
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  exports:[RouterModule],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
