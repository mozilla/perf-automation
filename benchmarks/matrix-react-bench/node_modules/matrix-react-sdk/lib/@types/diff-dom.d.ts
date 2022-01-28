declare module "diff-dom" {
    interface IDiff {
        action: string;
        name: string;
        text?: string;
        route: number[];
        value: string;
        element: unknown;
        oldValue: string;
        newValue: string;
    }
    interface IOpts {
    }
    class DiffDOM {
        constructor(opts?: IOpts);
        apply(tree: unknown, diffs: IDiff[]): unknown;
        undo(tree: unknown, diffs: IDiff[]): unknown;
        diff(a: HTMLElement | string, b: HTMLElement | string): IDiff[];
    }
}
