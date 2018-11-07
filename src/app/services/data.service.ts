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
    statusWork: boolean;
    photo: any;
    comment: string;
}

@Injectable()

export class DataService {





    userList: BehaviorSubject<any> = new BehaviorSubject(
        [
            {
                id: 1,
                firstName: 'Константин',
                secondName: 'Белов',
                lastName: 'Иванович',
                role: 'Директор',
                dateBorn: moment('1996-06-01').toDate(),
                statusWork: true,
                photo: 'https://pp.userapi.com/c824503/v824503118/b9f12/DmtUpTyffX4.jpg',
                comment: 'Хороший человек',
            },
            {
                id: 2,
                firstName: 'Константин2',
                secondName: 'Белов2',
                lastName: 'Иванович2',
                role: 'зам Директор',
                dateBorn: moment('1996-06-01').toDate(),
                statusWork: true,
                photo: 'https://pp.userapi.com/c824503/v824503118/b9f12/DmtUpTyffX4.jpg',
                comment: 'Хороший человек',
            },
        ]
    );

    constructor() {
    }

    deleteUser(userId) {
        const users = this.userList.value.filter((item: UserModels) => {
            if (item.id === userId) {
                return false;
            }
            return true;
        });
        console.log(users);
        this.userList.next(users);
    }

    editUserById(formData: UserModels) {
        const newUserList = this.userList.value.map((item: UserModels) => {
            if (item.id === formData.id) {
                return formData;
            } else {
                return item;
            }
        });

        this.userList.next(newUserList);
    }

    getDataFromDb() {

    }

    getDataFromLs() {

    }

    getUserById() {

    }
}
