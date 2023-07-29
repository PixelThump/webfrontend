import {IEnvironment} from "./IEnvironment";

export const environment: IEnvironment = {
  production: false,
  apiUrl: "localhost:8080",
  apiProtocol: "http://",
  socketProtocol: "ws:",
  supportedSeshTypes: ["quizxel"]
};
