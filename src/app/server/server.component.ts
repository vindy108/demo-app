import { Component } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
        .online{
            color: white;
        }
    `]
 
})

export class ServerComponent {
    servermessage = 'No server available!';
    serverID:number=10;
    serverStatus:string = 'Online';
    serverName='Linux';
    serverCondition = false;
    servers = ['Test,Test2'];

    getServerStatus(){
      return this.serverStatus;
    }


    getColor(){
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
    serverState:boolean = false;
    constructor(){
        // setTimeout(() => {
        //     this.serverState=false;
        // },2000);

       this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    onServer(){
        this.serverCondition=true;
        this.servers.push(this.serverName);
       this.servermessage='Server is available and server name is'+this.serverName;
    }

    onServerName(event:Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}