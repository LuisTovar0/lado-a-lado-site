<script lang="ts">
    import { onMount } from 'svelte';
    import type { Snippet } from 'svelte';

    interface Props {
        title: string;
        description?: string;
        closeLabel?: string;
        onClose?: () => void;
        children: Snippet;
    }

    let {
        title,
        description,
        closeLabel = 'Fechar janela',
        onClose = () => {},
        children
    }: Props = $props();
    let dialogElement: HTMLDialogElement;
    const dialogId = $props.id();

    onMount(() => dialogElement.showModal());

    function close() {
        if (dialogElement.open) dialogElement.close();
    }

    function handleDialogClose() {
        onClose();
    }

    function handleBackdropClick(event: MouseEvent) {
        if (event.target === event.currentTarget) close();
    }
</script>

<dialog
    bind:this={dialogElement}
    class="modal"
    aria-labelledby={`${dialogId}-title`}
    aria-describedby={description ? `${dialogId}-description` : undefined}
    onclick={handleBackdropClick}
    onclose={handleDialogClose}
>
    <div class="modal__content">
        <div class="modal__header">
            <div>
                <h2 id={`${dialogId}-title`}>{title}</h2>
            </div>
            <button
                type="button"
                class="modal__close"
                aria-label={closeLabel}
                onclick={close}
            >
                ×
            </button>
        </div>

        {#if description}
            <p id={`${dialogId}-description`}>{description}</p>
        {/if}

        <div class="modal__body">
            {@render children()}
        </div>
    </div>
</dialog>

<style lang="scss">
    .modal {
        width: min(calc(100% - 32px), 520px);
        margin: auto;
        padding: 0;
        border: 0;
        border-radius: 12px;
        color: var(--theme-brown);
        background: var(--theme-white);
        box-shadow: 0 11px 15px -7px rgba(45, 19, 30, 0.24),
            0 24px 38px 3px rgba(45, 19, 30, 0.16),
            0 9px 46px 8px rgba(45, 19, 30, 0.1);
    }

    .modal[open] {
        animation: modal-enter 220ms cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    .modal::backdrop {
        background: rgba(45, 19, 30, 0.46);
        animation: modal-backdrop-enter 180ms ease-out both;
    }

    .modal__content {
        padding: 24px;
    }

    .modal__header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 24px;
    }

    h2 {
        margin: 0;
        color: var(--theme-brown);
        font-family: var(--font-display);
        font-size: clamp(1.65rem, 4vw, 2rem);
        font-weight: 400;
        line-height: 1.2;
    }

    p {
        margin: 24px 0 20px;
        color: var(--theme-black);
        font-family: var(--font-ui);
        font-size: 1rem;
        line-height: 1.6;
    }

    .modal__body {
        margin-top: 20px;
    }

    .modal__close {
        flex: 0 0 auto;
        width: 32px;
        height: 32px;
        margin: -6px -6px 0 0;
        border: 0;
        border-radius: 50%;
        color: var(--theme-brown);
        background: transparent;
        cursor: pointer;
        font-size: 1.6rem;
        line-height: 1;
        transition: background-color 140ms ease, color 140ms ease;
    }

    .modal__close:hover,
    .modal__close:focus-visible {
        color: var(--theme-white);
        background: var(--theme-red);
    }

    @keyframes modal-enter {
        from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
        }

        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @keyframes modal-backdrop-enter {
        from {
            background: rgba(45, 19, 30, 0);
        }

        to {
            background: rgba(45, 19, 30, 0.46);
        }
    }

    @media (max-width: 480px) {
        .modal__content {
            padding: 24px 20px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .modal[open],
        .modal::backdrop {
            animation: none;
        }
    }
</style>
