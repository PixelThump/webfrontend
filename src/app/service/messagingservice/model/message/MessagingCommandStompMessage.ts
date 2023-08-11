import {MessagingStompMessage} from "./MessagingStompMessage";
import {MessagingCommand} from "../MessagingCommand";


export interface MessagingCommandStompMessage extends MessagingStompMessage{

  command:MessagingCommand;
}
