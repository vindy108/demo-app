import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})

export class ServerComponent {
    serverID:number=10;
    serverStatus:string = 'Online';

    getServerStatus(){
      return this.serverStatus;
    }

    serverState:boolean = true;
    constructor(){
        setTimeout(() => {
            this.serverState=false;
        },2000);
    }
}