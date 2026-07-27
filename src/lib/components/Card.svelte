<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        padding?: string;
        children: Snippet;
    }

    let { padding = '0', children }: Props = $props();
</script>

<div class="lal-card" style:padding>
    {@render children()}
</div>

<style lang="scss">
    .lal-card {
        background: var(--theme-white);
        border-radius: 16px;
        box-shadow: 0 2px 8px rgba(109, 46, 70, 0.1);
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
</style>
