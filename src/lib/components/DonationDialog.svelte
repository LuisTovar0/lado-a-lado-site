<script lang="ts">
    import Dialog from '$lib/components/Dialog.svelte';

    interface Props {
        onClose: () => void;
    }

    const donationIban = 'PT50 0023 0000 4578 2303 2779 4';

    let { onClose }: Props = $props();
</script>

<Dialog
    title="Faz o teu donativo"
    description="Podes contribuir através de transferência bancária para o seguinte IBAN:"
    closeLabel="Fechar janela de donativo"
    {onClose}
>
    <div class="donation-details">
        <span>IBAN</span>
        <strong>{donationIban}</strong>
    </div>
</Dialog>

<style lang="scss">
    .donation-details {
        display: grid;
        gap: 8px;
        padding: 18px;
        border-radius: 12px;
        background: color-mix(in srgb, var(--theme-yellow) 52%, var(--theme-white));
    }

    .donation-details span {
        color: var(--theme-red);
        font-family: var(--font-mono);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    }

    .donation-details strong {
        color: var(--theme-black);
        font-family: var(--font-mono);
        font-size: 0.96rem;
        font-weight: 700;
        line-height: 1.5;
        overflow-wrap: anywhere;
    }
</style>
