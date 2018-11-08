import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Output() changeUserProfile: EventEmitter<any> = new EventEmitter<any>();

  users: BehaviorSubject<any>;

  constructor(
    private dataService: DataService,
  ) {
    this.users = this.dataService.userList;
  }

  openInfoUser(userId: number) {
    // выходное событие с ID пользователя
    this.changeUserProfile.emit(userId);
  }

  deleteUser(userId: number) {
    this.dataService.deleteUser(userId);
  }

}
