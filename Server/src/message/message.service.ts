import { Injectable, Res } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Message, MessageDocument } from './schemas/Message.schema';
import { MessageRepository } from './message.repository';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>) {}

  async readAll(): Promise<Message[]> {
    return await this.messageModel.find().exec();
  }

  //return list messages by discussion_id xxxx

  async getlistmessagesByDiscussion(DiscussionId): Promise<any> {
  const messages=  await this.messageModel.find({ DiscussionId: DiscussionId }).exec();
  }

  async createmessage(senderId,discussionId,content): Promise<Message> {
    const newmsj = new this.messageModel(senderId,discussionId,content);
    return newmsj.save();
  }
// create message in discussion Id 
/* @params{
  // senderId,discuId , content 
} */
 
   

};