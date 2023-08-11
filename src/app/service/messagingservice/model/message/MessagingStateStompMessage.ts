import {MessagingStompMessage} from "./MessagingStompMessage";
import {MessagingState} from "../MessagingState";


export interface MessagingStateStompMessage extends MessagingStompMessage {

  state: MessagingState;
}
