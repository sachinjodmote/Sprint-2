import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { Branch } from './branch';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   private baseUrl="http://localhost:8080/api/student";
   private getbranchurl="http://localhost:8080/api/branch";

   private baseUrl1="http://localhost:8080/api/student/add";
   private createbranchurl="http://localhost:8080/api/branch/add";

   private getbyid="http://localhost:8080/api/getbyid";
   private branchgetbyidurl="http://localhost:8080/api/branch/getbyid";

   private updateurl="http://localhost:8080/api/update";
   private updatebranchurl="http://localhost:8080/api/branch/update";

   private deleteurl="http://localhost:8080/api/delete";
   private branchdeleteurl="http://localhost:8080/api/branch/delete";
  constructor(private HttpClient:HttpClient) { }

  getStudentList(): Observable<Student[]>{               
    return this.HttpClient.get<Student[]>(`${this.baseUrl}`);        //student get all
  }
  getBranchList(): Observable<Branch[]>{
    return this.HttpClient.get<Branch[]>(`${this.getbranchurl}`);       //branch get all
  }
  createStudent(student:Student): Observable<Object>{ 
    return this.HttpClient.post(`${this.baseUrl1}`,student);       //student create
   }
  createBranch(branch:Branch):Observable<Object>{
    return this.HttpClient.post(`${this.createbranchurl}`,branch);      //branch create 
  }
  getStudentById(id:number):Observable<Student>{
    return this.HttpClient.get<Student>(`${this.getbyid}/${id}`);       //student findbyid
   }
  getBranchById(id:number): Observable<Branch>{
    return this.HttpClient.get<Branch>(`${this.branchgetbyidurl}/${id}`); //branch findbyid
   }
  updateStudent(id:number,student:Student):Observable<Object>{
    return this.HttpClient.put(`${this.updateurl}/${id}`,student);      //student update
   }
   updateBranch(id:number,branch:Branch):Observable<Object>{
    return this.HttpClient.put(`${this.updatebranchurl}/${id}`,branch);  //branch update
   }
   deleteStudent(id:number): Observable<Object>{
    return this.HttpClient.delete(`${this.deleteurl}/${id}`, {responseType:"text"});     //delete student
   }
   deleteBranch(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.branchdeleteurl}/${id}`,{responseType:"text"});  //delete branch
   }
}
