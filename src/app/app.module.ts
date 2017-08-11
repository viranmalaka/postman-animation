import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TreeModule} from 'angular-tree-component';
import {FormsModule} from '@angular/forms';
import {AceEditorComponent} from 'ng2-ace-editor';

import { SideBarComponent } from './side-bar/side-bar.component';
import { DataSetComponent } from './data-set/data-set.component';
import { CodeComponent } from './code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DataSetComponent,
    CodeComponent,
    AceEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    TreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
