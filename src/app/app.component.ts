import {Component} from '@angular/core';
import {DataService, UserModels} from './services/data.service';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    users: BehaviorSubject<any>;

    constructor(
        private dataService: DataService,
    ) {
        this.users = this.dataService.userList;
        console.log(Date.now())
    }

    openInfo() {
        console.log('ok');
    }

    deleteUser(userId: number) {
        this.dataService.deleteUser(userId);
    }
}
