import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {DataService, UserModels} from '../../services/data.service';

@Component({
    selector: 'app-accaunt',
    templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

    @Input() userId: number;
    @Output() closeProfile: EventEmitter<boolean> = new EventEmitter<boolean>();

//fixme Добавить как то id
    myForm: FormGroup = new FormGroup({
            firstName:  new FormControl('', [Validators.required]),
            secondName:  new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            role: new FormControl('', [Validators.required]),
            dateBorn: new FormControl('', [Validators.required]),
            statusWork: new FormControl('', [Validators.required]),
            photo: new FormControl('', []),
            comment: new FormControl('', []),
    });

    constructor(
        private dataService: DataService,
    ) {
    }

    ngOnInit() {
        this.initForm();
    }

    // Добавление (сетим) данных в форму
    initForm() {
        let user: any = null;
        if (this.userId) {
            this.dataService.userList.value.forEach((item: UserModels) => {
                if (item.id === this.userId) {
                    user = item;
                }
            });
        }
        if (user) {
            this.myForm.patchValue(user);
        }

    }

    saveUser() {
        const formData: UserModels = this.myForm.getRawValue();
        if (this.userId) { // Редактирование
            this.dataService.editUserById(formData, this.userId);
        } else { // обавление поьзователья
            this.dataService.addUser(formData);
        }

        this.cancel();
    }

    cancel() {
        this.closeProfile.emit();
    }
}
