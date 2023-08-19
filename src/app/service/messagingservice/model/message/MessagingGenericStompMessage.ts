import {MessagingStompMessage} from "./MessagingStompMessage";


export interface MessagingGenericStompMessage extends MessagingStompMessage{

  payload:any;
}
