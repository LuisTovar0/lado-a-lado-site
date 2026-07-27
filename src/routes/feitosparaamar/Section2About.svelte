<script>
    import InstaPost from "./InstaPost.svelte";
    import {vw} from "$lib";
</script>

<section class="py-12 flex flex-col gap-4 items-center">
    {#if ($vw < 768)}
        <h1 class="color-red mono">SOBRE</h1>
        <h2 class="fruits-delight text-3xl md:text-4xl xl:text-5xl">Em que consiste?</h2>
    {/if}
    <div class="flex md:grid md:grid-cols-2 flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-11/12 my-8">
        <div class="md:flex md:justify-center">
            <InstaPost classes="md:w-[400px]" />
        </div>

        <div class="explanation md:w-full md:flex md:flex-col md:gap-4">
            {#if ($vw >= 768)}
                <h1 class="color-red mono">SOBRE</h1>
                <h2 class="fruits-delight text-3xl md:text-4xl xl:text-5xl">Em que consiste?</h2>
            {/if}

            <p>
                <br />Todos já sentimos borboletas na barriga.
                <br />Todos sabemos quanto um voluntariado nos enche.
                <br />Por que é tão bom amar alguém?</p>

            <p>
                <br />O que é que estas três frases têm em comum?
                <br />Porque nos alteram tanto?</p>

            <p>
                <br />Nesta conferência queremos percorrer um caminho que vai desde a raiz destas questões até à forma
                como é possível viver uma vida mais cheia de sentido.
            </p>
            <p>
                <br /> Vais ficar de fora?
                <br /> Ou queres descobrir para que fomos feitos?
            </p>
        </div>
    </div>
</section>
