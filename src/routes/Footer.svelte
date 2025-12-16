<script>
  import {vw} from "$lib";
</script>

<footer class="grid items-center p-8 text-white">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        <img src="/img/logo-name-white.svg" alt="Lado a Lado escrito à mão"/>

        {#if ($vw >= 768)}
            <span>2026</span>
        {/if}

        <div class="flex gap-10 items-center">
            <a href="https://open.spotify.com/show/79y8yNDSivKHovVU28g4oI?si=7f2c649a98df410e">
                <img src="/img/icons/spoti.svg" alt="Spotify"/>
            </a>
            <a href="https://www.youtube.com/@lado_a_lado" class="yt">
                <img src="/img/icons/yt.svg" alt="YouTube"/>
            </a>
            <a href="https://www.instagram.com/ladoaladopt">
                <img src="/img/icons/insta.svg" alt="Instagram"/>
            </a>
        </div>

        {#if ($vw < 768)}
            <span>2026</span>
        {/if}
    </div>
</footer>

<style>
    :root {
        --base-dimention: 32px;
        --dimention: var(--base-dimention);
    }

    footer {
        background-color: var(--theme-brown);
    }

    a {
        @apply flex justify-center items-center;
        height: var(--dimention);
        width: var(--dimention);
    }

    .yt {
        --dimention: calc(var(--base-dimention) * 1.15);
    }
</style>
