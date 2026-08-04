<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="lal-feature-band">
    <div class="lal-feature-band__inner font-display flex-wrap whitespace-normal text-[1.15rem] sm:flex-nowrap sm:whitespace-nowrap sm:text-[clamp(0.95rem,2vw,1.7rem)]">
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
        font-weight: 500;
        font-style: italic;
        font-size: clamp(0.95rem, 2vw, 1.7rem);
        line-height: 1.2;
        text-align: center;
        color: var(--theme-brown);
        display: inline-flex;
        max-width: 100%;
        flex-wrap: wrap;
        white-space: normal;
        align-items: center;
        justify-content: center;
        gap: 0.3em;
    }

    @media (min-width: 640px) {
        .lal-feature-band__inner {
            flex-wrap: nowrap;
            white-space: nowrap;
        }
    }
</style>
