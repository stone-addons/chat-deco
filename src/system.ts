export type MySystem = SystemType<PrivSystem>;
export const system = server.registerSystem<MySystem>(0, 0);

interface PrivSystem extends IStoneServerSystem<PrivSystem> {}

checkApiLevel(1);
