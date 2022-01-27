declare function onLoggedOutAndStorageCleared(): void;
export interface ILifecycleCustomisations {
    onLoggedOutAndStorageCleared?: typeof onLoggedOutAndStorageCleared;
}
declare const _default: ILifecycleCustomisations;
export default _default;
