<script>
    import {onMount} from "svelte";
    import "../styles.scss";
    import DialogHost from "$lib/components/DialogHost.svelte";
    import Footer from "./Footer.svelte";
    import {updateVw} from "$lib";

    onMount(() => updateVw());
</script>

<svelte:window on:resize={updateVw} />

<main>
    <slot />
</main>

<Footer />

<DialogHost />

<style>
    main {
        width: 100%;
        min-width: 0;
        min-height: 100%;
    }
</style>
