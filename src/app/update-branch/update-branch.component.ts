import { Component, OnInit } from '@angular/core';
import { Branch } from '../branch';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.css']
})
export class UpdateBranchComponent implements OnInit {
   id:any;
   branch: Branch =new Branch();
   constructor(private studentService:StudentService,private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.studentService.getBranchById(this.id).subscribe(data=>{
      this.branch=data;
    }, error=> console.log(error));
  }
  onSubmit(){
    this.studentService.updateBranch(this.id,this.branch).subscribe(data=>{
      console.log(data);
      this.goToBranch();
    }, error=> console.log(error));
  }
  goToBranch(){
    this.router.navigate(['/branches']);
  }
}
