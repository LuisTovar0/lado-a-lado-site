<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        variant?: 'primary' | 'outline' | 'deep';
        size?: 'sm' | 'md' | 'lg';
        href?: string;
        target?: string;
        disabled?: boolean;
        children: Snippet;
    }

    let {
        variant = 'primary',
        size = 'md',
        href,
        target,
        disabled = false,
        children,
    }: Props = $props();

    const tag = $derived(href ? 'a' : 'button');
</script>

<svelte:element
    this={tag}
    {href}
    {target}
    {disabled}
    class="lal-btn lal-btn--{variant} lal-btn--{size}"
    rel={target === '_blank' ? 'noopener' : undefined}
>
    {@render children()}
</svelte:element>

<style lang="scss">
    .lal-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: 'OverpassMono', monospace;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        border-radius: 999px;
        cursor: pointer;
        text-decoration: none;
        white-space: nowrap;
        line-height: 1;
        transition:
            transform 140ms cubic-bezier(0.22, 1, 0.36, 1),
            background 240ms cubic-bezier(0.4, 0, 0.2, 1),
            color 240ms cubic-bezier(0.4, 0, 0.2, 1);

        &:active {
            transform: scale(0.97);
        }

        &:disabled {
            opacity: 0.45;
            cursor: not-allowed;
        }
    }

    /* Sizes — matching design system exactly */
    .lal-btn--sm {
        font-size: 12px;
        padding: 10px 22px;
    }

    .lal-btn--md {
        font-size: 14px;
        padding: 15px 34px;
    }

    .lal-btn--lg {
        font-size: 16px;
        padding: 20px 46px;
    }

    /* Variants */
    .lal-btn--primary {
        color: var(--theme-white);
        background-color: var(--theme-red);
        border: 3px solid var(--theme-red);

        &:hover {
            background-color: color-mix(in srgb, var(--theme-red) 85%, black);
            border-color: color-mix(in srgb, var(--theme-red) 85%, black);
        }
    }

    .lal-btn--outline {
        color: var(--theme-red);
        background: transparent;
        border: 3px solid var(--theme-red);

        &:hover {
            color: var(--theme-white);
            background-color: var(--theme-red);
        }
    }

    .lal-btn--deep {
        color: var(--theme-white);
        background-color: var(--theme-brown);
        border: 3px solid var(--theme-brown);

        &:hover {
            filter: brightness(0.9);
        }
    }
</style>
