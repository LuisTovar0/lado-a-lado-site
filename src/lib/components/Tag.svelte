<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        tone?: 'red' | 'yellow' | 'outline';
        children: Snippet;
    }

    let { tone = 'outline', children }: Props = $props();
</script>

<span class="lal-tag lal-tag--{tone}">
    {@render children()}
</span>

<style lang="scss">
    .lal-tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: 'OverpassMono', monospace;
        font-weight: 600;
        font-size: 11px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 6px 12px;
        border-radius: 999px;
        white-space: nowrap;
        line-height: 1;
    }

    .lal-tag--red {
        color: var(--theme-white);
        background-color: var(--theme-red);
    }

    .lal-tag--yellow {
        color: var(--theme-brown);
        background-color: var(--theme-yellow);
    }

    .lal-tag--outline {
        color: var(--theme-red);
        background: transparent;
        box-shadow: inset 0 0 0 1.5px var(--theme-red);
    }
</style>
