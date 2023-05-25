
import {myRxStompConfig} from "../../../../src/app/rx-stomp.config";
import {RxStompService} from "./rx-stomp-service.service";

export function rxStompServiceFactory():RxStompService{

  const rxStomp:RxStompService = new RxStompService()
  rxStomp.configure(myRxStompConfig);
  rxStomp.activate();
  return rxStomp;
}
