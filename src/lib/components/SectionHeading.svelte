<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        eyebrow: string;
        align?: 'center' | 'start';
        children: Snippet;
    }

    let { eyebrow, align = 'center', children }: Props = $props();
</script>

<div class="lal-section-heading lal-section-heading--{align}">
    <span class="lal-section-heading__eyebrow">{eyebrow}</span>
    <h2 class="lal-section-heading__title">{@render children()}</h2>
</div>

<style lang="scss">
    .lal-section-heading {
        &--center {
            text-align: center;
        }

        &--start {
            text-align: left;
        }
    }

    .lal-section-heading__eyebrow {
        font-family: 'OverpassMono', monospace;
        font-weight: 700;
        font-size: 0.8125rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--theme-red);
        display: block;
        margin-bottom: 0.75rem;
    }

    .lal-section-heading__title {
        font-family: var(--font-display);
        font-weight: 400;
        font-size: clamp(1.9rem, 3.4vw, 2.8rem);
        line-height: 1.2;
        color: var(--theme-brown);
        margin: 0;
    }
</style>
