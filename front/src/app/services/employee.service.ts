import { EmployeeModel } from "./../models/employee";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup , FormControl } from "@angular/forms";
import { Validators } from '@angular/forms';

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
  // form
  myform: FormGroup = new FormGroup({
    id : new FormControl(''),
    fullName : new FormControl('',Validators.required),
    email : new FormControl('',Validators.compose([Validators.required,Validators.email])),
    phone : new FormControl(''),
    job : new FormControl('',Validators.required),
    birthDate : new FormControl('19/03/1980'),
    addresse: new FormControl(''),
    nationality : new FormControl('',Validators.required),
    religion : new FormControl(''),
    martialStatus : new FormControl(''),
    passportNumber : new FormControl('',Validators.required),
    emergencyContact : new FormControl('',Validators.required),
    bankName : new FormControl('',Validators.required),
    accountNumber : new FormControl('',Validators.required),
    IFSC : new FormControl('',Validators.required),
    PAN : new FormControl('',Validators.required),
    UPI : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),
  })
  fillEditForm(employee:any)
  {
    const data = {
      id:employee['_id'],
      fullName:employee['fullName'],
      email:employee['email'],
      phone:employee['phone'],
      job:employee['job'],
      birthDate:employee['birthDate'],
      addresse:employee['addresse'],
      nationality:employee['nationality'],
      religion:employee['religion'],
      martialStatus:employee['martialStatus'],
      passportNumber:employee['passportNumber'],
      emergencyContact:employee['emergencyContact'],
      bankName:employee['bankName'],
      accountNumber:employee['accountNumber'],
      IFSC:employee['IFSC'],
      PAN:employee['PAN'],
      UPI:employee['UPI'],
      description:employee['description'],
    }
    this.myform.setValue(data);
  }

}