import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HttpClientModule} from '@angular/common/http';
import { CreateStudentComponent } from './create-student/create-student.component'
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    BranchListComponent,
    CreateBranchComponent,
    UpdateBranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
