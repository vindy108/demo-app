import { Component } from '@angular/core';

@Component({
    selector:'app-warning-alert',
    template : `
        <p>Warning!! You are in the wrong zone</p>
    `,
    styles : [
        `
        p{
            padding: 20px;
            background-color:rosybrown;
            border: 1px solid red;
         }
    `
]

})

export class WarningAlertComponent {

}