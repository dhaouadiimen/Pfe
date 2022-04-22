import React from 'react'
import './message.css'
import { format } from 'timeago.js' 
export default function Message({message,currentuser}) {
  return (
    <div className={message.senderId ==currentuser ? "message own" : "message"}>
    <div className="messageTop">
      <img
        className="messageImg"
        src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <p className="messageText">
        {message.content}
         </p>
    </div>
   <div className='messageBottom'> {format(message.createdAt)}</div> 
  </div>
  )
}
