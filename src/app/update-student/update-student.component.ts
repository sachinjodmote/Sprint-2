import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  id:any;
  
student: Student =new Student();
  constructor(private studentService: StudentService, private route: ActivatedRoute, private router:Router) {}
  
  ngOnInit(): void {
        this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student=data;
    }, error=> console.log(error));
    
   
    
  }
  onSubmit(){
    this.studentService.updateStudent(this.id, this.student).subscribe(data =>{
      console.log(data);
      this.goToStudent();
    }, error=>console.log(error));
    
  }
  goToStudent(){
    this.router.navigate(['/students']);
  }
}
