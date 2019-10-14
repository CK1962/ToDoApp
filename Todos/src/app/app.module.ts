import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule} from '@angular/material';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TodoGridComponent } from './todo-grid/todo-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent,
    TodoComponent,
    TodoGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NoopAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
