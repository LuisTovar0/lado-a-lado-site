<script lang="ts">
    import { dialogService } from '$lib/services/DialogService.svelte';

    const activeDialog = $derived(dialogService.activeDialog);
</script>

{#if activeDialog}
    {@const DialogComponent = activeDialog.component}
    <DialogComponent {...activeDialog.props} />
{/if}
