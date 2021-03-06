import { Injectable, Res } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Message, MessageDocument } from './schemas/Message.schema';
import { MessageRepository } from './message.repository';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>) {} 

  //return list messages by discussion_id xxxx
  async getlistmessagesByDiscussionId(discussionId): Promise<any> 
  {
  const messages=  await this.messageModel.find({ discussionId: discussionId }).exec();
  return messages;
  }
  
  async createmessage(senderId,discussionId,content): Promise<Message> {
    console.log("senderId",senderId)
    let ms=new Message() 
    ms.senderId=senderId;
    ms.discussionId=discussionId;
    ms.content=content;
    console.log("discuId",discussionId)
    console.log("content",content)
    const newmsj =await new this.messageModel(ms);
    console.log("New message ",newmsj);
    return newmsj.save();
  }
  
};
