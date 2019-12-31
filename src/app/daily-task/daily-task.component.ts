import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../service/httpclient.service';
import {TaskDefinition} from '../service/task-definition.model';

@Component({
    selector: 'app-daily-task',
    templateUrl: './daily-task.component.html',
    styleUrls: ['./daily-task.component.css']
})
export class DailyTaskComponent implements OnInit {
    tasks: TaskDefinition[];

    constructor(
        private httpClientService: HttpClientService
    ) {
    }

    ngOnInit() {
        this.httpClientService.getTasks().subscribe(
            response => this.handleSuccessfulResponse(response),
        );
    }

    handleSuccessfulResponse(response) {
        this.tasks = response;
    }

    deleteTask(task: TaskDefinition): void {
        this.httpClientService.deleteTask(task)
            .subscribe(data => {
                this.tasks = this.tasks.filter(u => u !== task);
            });
    }

}
