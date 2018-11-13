import {Injectable, EventEmitter} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import * as moment from 'moment';

export interface UserModels {
    id: number;
    firstName: string;
    secondName: string;
    lastName: string;
    role: string;
    dateBorn: any;
    statusWork: any;
    photo: any;
    comment: string;
}

@Injectable()

export class DataService {

    userList: BehaviorSubject<any> = new BehaviorSubject([]);

    constructor() {
        const lsUsers = localStorage.getItem('users');
        if (lsUsers !== null) {
            this.userList.next(JSON.parse(lsUsers));
        }
    }

    deleteUser(userId) {
        const users = this.userList.value.filter((item: UserModels) => {
            if (item.id === userId) {
                return false;
            }
            return true;
        });
        this.userList.next(users);
        this.saveToLocalStorage();
    }

    editUserById(formData: UserModels, userId: number) {

        const newUserList = this.userList.value.map((item: UserModels, i) => {

            if (item.id === userId) {
                formData.id = userId;
                return formData;
            } else {
                return item;
            }
        });


        this.userList.next(newUserList);
    }

    addUser(user) {
        if (user) {
            user.id = this.getIdNewUser(); // Получили id
            this.userList.value.push(user);
            this.userList.next(this.userList.value);
            this.saveToLocalStorage();
        }
    }

    // Сохраняем в ls
    saveToLocalStorage() {
        localStorage.setItem('users', JSON.stringify(this.userList.value));
    }

    getIdNewUser() {
        let id = 1;
        this.userList.value.forEach(() => {
            id++;
        });
        return id;
    }
}
