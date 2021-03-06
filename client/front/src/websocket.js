import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NotificationManager} from 'react-notifications';
import {io} from "socket.io-client";
import {useDispatch } from 'react-redux';
import { GetMessage } from './Redux/Utilities/utulityMsj';
const Websocket = () => {
    const dispatch = useDispatch();
    const socket = io("http://localhost:3000", {
        reconnectionDelayMax: 10000,
        auth: {
          token: "123"
        },
        query: {
          "my-key": "my-value"
        }
      });
    //when connect
    socket.on('connect', function(client) {
        console.log('a user connected');    
      });
       //when disconnect 
      socket.on('disconnect', function() {
        console.log('a user disconnected'); 
        
      });
      
      socket.emit("addUser",{
        accountId :  "62752a322047424709a53c05",
      });      
      socket.on('events', function(data) {
        console.log("--------------------------------------dataaaaaaaaaaaaaaaNotif",data);
        NotificationManager.success(data.newmsj.content, data.newmsj.senderId);
         GetMessage(dispatch,data.newmsj.discussionId);    
      });
      console.log("sockeeeeeeeeeeeeet",socket.Socket);
       return (
         <>
           
         </>
       );
     
   }
   export default Websocket;




