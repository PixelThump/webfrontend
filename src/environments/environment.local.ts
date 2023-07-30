import {IEnvironment} from "./IEnvironment";

export const environment: IEnvironment = {
  production: false,
  apiUrl: "pixelthump.win/api",
  apiProtocol: "https://",
  socketProtocol: "wss:",
  supportedSeshTypes: ["quizxel"]
};
