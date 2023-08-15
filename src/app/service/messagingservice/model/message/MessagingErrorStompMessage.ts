import {MessagingStompMessage} from "./MessagingStompMessage";


export interface MessagingErrorStompMessage extends MessagingStompMessage {

  error: string
}
