import { EmployeeModel } from "./../models/employee";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL:string="http://localhost:3000/employees";

  constructor(private http:HttpClient) { }

  // Get All Employees
  getAllEMployees():Observable<EmployeeModel[]>
  {
    return this.http.get<EmployeeModel[]>(this.URL);
  }
  // Get Employee by ID
  getEmployeeById(id:string):Observable<EmployeeModel>
  {
    return this.http.get<EmployeeModel>(this.URL + "/" + id);
  }
  // create new Employee
  createEmployee(data:any)
  {
    return this.http.post(this.URL,data);
  }
  // update Employee
  updateEmployee(id:string,data:any):Observable<EmployeeModel>
  {
    return this.http.put<EmployeeModel>(this.URL + "/" + id,data);
  }
  // delete Employee
  deleteEmployee(id:string):Observable<EmployeeModel>
  {
    return this.http.delete<EmployeeModel>(this.URL + "/" + id);
  }
}
