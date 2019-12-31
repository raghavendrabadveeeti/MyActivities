import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TaskDefinition} from './task-definition.model';
import {TaskScheduler} from 'protractor/built/taskScheduler';

export class Employee {
    constructor(
        public empId: string,
        public name: string,
        public designation: string,
        public salary: string,
    ) {
    }
}

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getEmployees() {
        console.log('test call');
        return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
    }

    public deleteEmployee(employee) {
        return this.httpClient.delete<Employee>('http://localhost:8080/employees' + '/' + employee.empId);
    }

    public createEmployee(employee) {
        return this.httpClient.post<Employee>('http://localhost:8080/employees', employee);
    }

    public createTask(task) {
        return this.httpClient.post<TaskDefinition>('http://localhost:8080/tasks', task);
    }

    getTasks() {
        return this.httpClient.get<TaskDefinition[]>('http://localhost:8080/tasks');
    }

    public deleteTask(task) {
        return this.httpClient.delete<TaskDefinition>('http://localhost:8080/tasks' + '/' + task.id);
    }
}
