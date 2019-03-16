import { MySystem } from "./system";

const system = server.registerSystem<MySystem>(0, 0);
system.initialize = function() {
  server.log("Mod Loaded");
};
