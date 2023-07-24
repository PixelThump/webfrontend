import {Observable} from "rxjs";
import {IMessage} from "@stomp/rx-stomp";

export interface SeshSubscriptions{

  public: Observable<IMessage>
  private: Observable<IMessage>
}
