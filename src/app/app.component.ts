import {Component} from '@angular/core';

// Отвечает за переключение компонентов (м-ду таблицей и профилем)
@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-12" *ngIf="!openProfileFlag">
                    <h1>Сотрудники</h1>
                    <button type="button" class="btn btn-success mb-2" (click)="openProfile()">Добавить</button>
                    <app-list (changeUserProfile)="openProfile($event)"></app-list>
                </div>
                <div class="col-12" *ngIf="openProfileFlag">
                    <h1>Профиль</h1>
                    <app-accaunt (closeProfile)="closeProfile()" [userId]="changeUserId"></app-accaunt>
                </div>

            </div>
        </div>

    `,
})
export class AppComponent {
    changeUserId = null;
    openProfileFlag = false;

    constructor() {
    }

    // Открываем профиль (форму)
    openProfile(userId = null) {
        this.changeUserId = userId;
        this.openProfileFlag = true;
    }

    // Закрываем профиль (форму)
    closeProfile() {
        this.openProfileFlag = false;
    }
}
