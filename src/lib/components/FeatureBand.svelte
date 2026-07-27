<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="lal-feature-band">
    <div class="lal-feature-band__inner">
        {@render children()}
    </div>
</div>

<style lang="scss">
    .lal-feature-band {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
        padding: 1.5rem var(--container-pad);
        width: 100%;
        box-sizing: border-box;
        background: var(--theme-yellow);
    }

    .lal-feature-band__inner {
        font-family: var(--font-display);
        font-weight: 500;
        font-style: italic;
        font-size: clamp(0.95rem, 2vw, 1.7rem);
        line-height: 1.2;
        text-align: center;
        color: var(--theme-brown);
        display: inline-flex;
        flex-wrap: nowrap;
        white-space: nowrap;
        align-items: center;
        justify-content: center;
        gap: 0.3em;
    }

    @media (max-width: 600px) {
        .lal-feature-band__inner {
            flex-wrap: wrap;
            white-space: normal;
            font-size: 1.15rem;
        }
    }
</style>
