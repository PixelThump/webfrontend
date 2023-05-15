import {RxStompService} from "./rx-stomp.service";
import {myRxStompConfig} from "./rx-stomp.config";

export function rxStompServiceFactory():RxStompService{

  const rxStomp:RxStompService = new RxStompService()
  rxStomp.configure(myRxStompConfig);
  rxStomp.activate();
  return rxStomp;
}
