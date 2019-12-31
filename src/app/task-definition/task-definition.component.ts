import {Component, OnInit} from '@angular/core';
import {Employee, HttpClientService} from '../service/httpclient.service';
import {TaskDefinition} from '../service/task-definition.model';
import {ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
    selector: 'app-task-definition',
    templateUrl: './task-definition.component.html',
    styleUrls: ['./task-definition.component.css']
})
export class TaskDefinitionComponent implements OnInit {


    task: TaskDefinition = new TaskDefinition();


    constructor(
        private httpClientService: HttpClientService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    createTask(): void {
        this.httpClientService.createTask(this.task)
            .subscribe(data => {
                this.router.navigate(['/']);
            });

    }

}
