const system = server.registerSystem<IStoneServerSystem<{}>>(0, 0);
system.initialize = function() {
  system.log("Mod Loaded");
};
