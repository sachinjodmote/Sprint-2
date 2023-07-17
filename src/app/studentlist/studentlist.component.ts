import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  
  students!: Student[];
  constructor(private studentService: StudentService, private router:Router){}
  ngOnInit(): void {
    this.getStudents();
  }
private getStudents(){
  this.studentService.getStudentList().subscribe(data =>{
    this.students=data;
  })
}

updateStudent(id:number){
  this.router.navigate(['update-student',id]);
}
deleteStudent(id:number){
  this.studentService.deleteStudent(id).subscribe(data => {
    console.log(data);
    this.getStudents();


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