import { Component, OnInit } from '@angular/core';
import { Branch } from '../branch';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {
  
  branches!:Branch[];
  constructor(private studentService:StudentService, private router: Router){}
  ngOnInit(): void {
    this.getBranches();
  }
  getBranches(){
       this.studentService.getBranchList().subscribe(data=>{
        this.branches=data;
       })
  }
  updateBranch(id:number){
    this.router.navigate(['update-branch',id]);
  }
  deleteBranch(id:number){
    this.studentService.deleteBranch(id).subscribe(data => {
      console.log(data);
      this.getBranches();
  
  
      this.reloadPage
    });
  
  }
  reloadPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
     
    });
  }

}
