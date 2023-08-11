import {MessagingStompMessage} from "./MessagingStompMessage";


export interface MessagingStateStompMessage extends MessagingStompMessage {

  state: Object;
}
