import type { Component } from 'svelte';

type DialogProps = {
    onClose: () => void;
};

type ActiveDialog = {
    id: symbol;
    component: Component<any>;
    props: Record<string, unknown>;
};

export type DialogRef = {
    close: () => void;
};

let activeDialog = $state<ActiveDialog | null>(null);

class DialogService {
    get activeDialog() {
        return activeDialog;
    }

    open<Props extends DialogProps>(
        component: Component<Props>,
        props: Omit<Props, 'onClose'>
    ): DialogRef {
        const id = Symbol('dialog');
        const close = () => {
            if (activeDialog?.id === id) activeDialog = null;
        };

        activeDialog = {
            id,
            component,
            props: { ...props, onClose: close }
        };

        return { close };
    }
}

export const dialogService = new DialogService();
