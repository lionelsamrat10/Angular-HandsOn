import { Injectable } from '@angular/core';
import { Employee } from './employee';
//Import the Employee

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employeeList: Employee[] = [
    {
      id: 1,
      name: "Sam",
      salary: 30000,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1999-08-28")
    },
    {
      id: 2,
      name: "Sarah",
      salary: 23100,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1998-05-18")
    },
    {
      id: 3,
      name: "Jacob",
      salary: 44000,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1993-07-08")
    },
    {
      id: 4,
      name: "Josh",
      salary: 40000,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1997-01-11")
    },
    {
      id: 5,
      name: "Steve",
      salary: 16750,
      isPermanent: true,
      department_id: 1,
      department_name: "FSE",
      skillArray: [{id:1, name:"Java"}, {id:2, name:"Spring"}, {id:3, name:"JavaScript"}],
      dob: new Date("1994-12-31")
    }];

    //create a method called getAllEmployees in this service class
    getAllEmployees(): Employee[]{
      return this.employeeList;
    }
    //Return employee based on its employeeId
    employee_return: Employee;
    getEmployee(employeeId: number): Employee{
      for(let emp of this.employeeList){
        if(emp.id === employeeId){
          this.employee_return = emp;
        }
      }
      return this.employee_return;
    }
}
