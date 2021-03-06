import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsResponse,
  MessageBody,
  ConnectedSocket
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import { Server } from 'ws';
import { AddUserConnectTdo } from './TDO/AddUserConnectTdo';
import { AccountsSchema } from 'src/accounts/schemas/accounts.schema';
import { createContext } from "react";
import { MessageController } from '../message/message.controller';
import {MessageService} from '../message/message.service'
import { Message } from 'src/message/schemas/Message.schema';
let users = [];

const addspecificUser = (accountId, socketId) => {
  console.log("//////////////////////",accountId,socketId);
  !users.some((account) => account.accountId === accountId) &&
    users.push({ accountId, socketId });
};

const getSpecificUser = (accountId) => {
  return users.find((account) => account.accountId === accountId);
};

const removeUser = (socketId) => {
  users = users.filter((account) => account.socketId !== socketId);
};
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})

export class EventsGateway  {
  @WebSocketServer()

  server: Server;
   private logger: Logger = new Logger('MessageGateway');
   public afterInit(server: Server): void {
    return this.logger.log('Init');
  }
  public handleDisconnect(client: Socket): void {
    //return this.logger.log(`Client disconnected: ${client.id}`);
    console.log("*********************socketId****************",client.id);
    removeUser(client.id);
    //this.server.emit("getnewUsers",users);
    console.log("*********************newUsers****************",users);
   
  }

  public handleConnection(client: Socket): any {
      return this.logger.log(`Client connected: ${client.id}`);
     //return this.server.emit(client.id);
     //return client.emit('addUser', client.id);   
  }

  @SubscribeMessage('events')
  addnotif(@MessageBody() data: any): Observable<WsResponse<number>> {
   return this.server.emit('events', data);
  }
  
  @SubscribeMessage('addUser')
  addUser(@MessageBody() data : AddUserConnectTdo , @ConnectedSocket() client:Socket): void {
    console.log("*********************accountId****************",data);
    addspecificUser(data.accountId,client.id);
    console.log("*********************ListeUsers****************",users);
    //return this.server.to("dD8CjUwMRSqPlmPJAAAC").emit('events', data);
  }

  

  @SubscribeMessage('sendprivatemsj')
  sendprivatemsj(data: any, senderId : string): void {
    console.log("userrrrrrrrrrrrrrrrrrrrrrrrrrssssss",users);
    console.log("parts",data.parts);
    return data.parts.map(p=>
      {
     const userpart= getSpecificUser(p);
     console.log("userpart",userpart);
      if (userpart.accountId!==senderId)
      {
        return this.server.to(userpart.socketId).emit("events",data); 

       
       }
    })
  }


  @SubscribeMessage('getid')
  handleEventid(client: Socket, data: string): string {
    console.log("client",client.id)
    return client.id;
  } 
}

