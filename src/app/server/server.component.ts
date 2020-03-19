import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})

export class ServerComponent {
    servermessage = 'No server available!';
    serverID:number=10;
    serverStatus:string = 'Online';
    serverName='Linux';
    serverCondition = false;

    getServerStatus(){
      return this.serverStatus;
    }


    getColor(){
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
    serverState:boolean = true;
    constructor(){
        // setTimeout(() => {
        //     this.serverState=false;
        // },2000);

       this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    onServer(){
        this.serverCondition=true;
       this.servermessage='Server is available and server name is'+this.serverName;
    }

    onServerName(event:Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}