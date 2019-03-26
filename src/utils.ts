export function isPlayerInfo(info: ActorInfo): info is PlayerInfo {
  return info.identifier === "minecraft:player";
}