import { Component } from "vue";
interface DialogInstance {
    dialog: Component;
    wrapper: string;
    props: any;
    resolve: (data: any) => void;
}
export declare const dialogRef: import("vue").ShallowRef<DialogInstance>;
/**
 * Closes the currently opened dialog, resolving the promise with the given data.
 */
export declare function closeDialog(data: any): void;
/**
 * Creates a function that opens the given dialog component with some props in the given wrapper. The function returns
 * a promise that will resolve when closeDialog(data) is called.
 */
export declare function openDialogFunction<P, R>(dialog: Component, wrapper?: string): (props: P) => Promise<R>;
export {};
