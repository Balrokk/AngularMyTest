import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {DataService, UserModels} from "../../services/data.service";

@Component({
    selector: 'app-accaunt',
    templateUrl: './accaunt.component.html',
    styleUrls: ['./accaunt.component.css'],
    providers: []
})
export class AccauntComponent implements OnInit {

    @Input() userId: number;

    myFirstReactiveForm: FormGroup;
    fb: FormBuilder;

    constructor(
        private dataService: DataService,
    ) {
        this.fb = new FormBuilder();
    }

    ngOnInit() {
        this.initForm();
        console.log(this.userId);
    }

    /** Инициализация формы*/
    initForm() {
        let user: any = null;
        this.dataService.userList.value.forEach((item: UserModels) => {
            if (item.id === this.userId) {
                user = item;
            }
        });

        if (user) {
            this.myFirstReactiveForm = this.fb.group(user);
        }

    }


    saveUser() {
        const formData: UserModels = this.myFirstReactiveForm.getRawValue();
        this.dataService.editUserById(formData);
    }
}
