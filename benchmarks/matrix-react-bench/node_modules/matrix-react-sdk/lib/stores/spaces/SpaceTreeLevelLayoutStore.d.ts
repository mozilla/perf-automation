export default class SpaceTreeLevelLayoutStore {
    private static internalInstance;
    static get instance(): SpaceTreeLevelLayoutStore;
    setSpaceCollapsedState(roomId: string, parents: Set<string>, collapsed: boolean): void;
    getSpaceCollapsedState(roomId: string, parents: Set<string>, fallback: boolean): boolean;
}
