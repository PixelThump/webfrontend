import {IEnvironment} from "./IEnvironment";

export const environment: IEnvironment = {
  production: true,
  apiUrl: "pixelthump.win/api",
  apiProtocol: "https://",
  socketProtocol: "wss:",
  supportedSeshTypes: ["quizxel"]
};
