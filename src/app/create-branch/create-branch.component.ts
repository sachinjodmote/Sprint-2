import { Component, OnInit } from '@angular/core';
import { Branch } from '../branch';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {
  branch: Branch =new Branch();
  constructor(private studentService:StudentService, private roter:Router){}
  ngOnInit(): void {
    }
  saveBranch(){
    this.studentService.createBranch(this.branch).subscribe(data=>{
      console.log(data);
      this.goToBranch();
    }, error=> console.log(error));
    
  }
  goToBranch(){
    this.roter.navigate(['/branches']);
  }
  onSubmit(){
    console.log(this.branch)
    this.saveBranch();
  }



}
