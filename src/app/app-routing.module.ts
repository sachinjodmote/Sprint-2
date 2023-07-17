import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';

const routes: Routes = [
  {path:'students', component: StudentlistComponent},
  //{path:'', redirectTo:'students', pathMatch:'full'},
  {path:'branches',component:BranchListComponent},
  
  {path:'create-student',component:CreateStudentComponent},
  {path:'create-branch',component:CreateBranchComponent},

  {path:'update-student/:id', component:UpdateStudentComponent},
  {path:'update-branch/:id', component:UpdateBranchComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
