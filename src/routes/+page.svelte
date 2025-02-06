<script>
</script>

<style lang="css">
    header {
        --toolbar-height: 8vw;
        height: var(---toolbar-height);
        background-color: var(--theme-yellow);

        & > * {
            @apply grid place-items-center;
            height: var(--toolbar-height);
            width: var(--toolbar-height);
            color: var(--theme-brown);
            font-weight: 600;
            text-align: center;
        }

        :last-child {
            margin-right: 25px;
        }
    }

    ._4-buttons > button{
        @apply rounded-full;
        background-color: var(--theme-yellow);
        height: 48px;
      }
</style>

<header class="hidden md:flex justify-between">
    <a href="/" class="bg-[var(--theme-brown)]">
        <img class="w-4/5" src="/img/logo-name-yellow.svg" alt="Lado a Lado"/>
    </a>
    <a>Quem somos</a>
    <a>O que fazemos</a>
    <a>Lado a Lado</a>
    <a>Blog</a>
    <a>Eventos</a>
    <a>Contactos</a>
    <a>Doações</a>
</header>

<button class="md:hidden absolute top-4 right-4 bg-[var(--theme-brown)] rounded-full h-8 w-8 grid place-content-center">
    <img src="/img/icons/menu.svg" alt="menu" height="24" width="24"/>
</button>

<section class="h-lvh">
    <img src="/img/main/img-inicial.jpg" alt="Casal feliz" class="h-lvh object-cover absolute -z-10"/>

    <img src="/img/logo-name-yellow.svg" alt="Lado a Lado" class="h-[7%] absolute top-[5%] left-[5%]"/>

    <div class="h-1/2 w-5/6 absolute top-[15%] left-1/2 translate-x-[-50%]">
        <h1 class="fruits-delight text-6xl ">Inspirar jovens a encontrar no amor* o sentido da vida</h1>
        <h2 class="text-xl">Um projeto que visa blah blah, através de blah blah blah e não sei que mais</h2>
        <div class="_4-buttons mt-4 grid gap-4 grid-cols-2">
            <button class="">Podcasts</button>
            <button class="">Eventos</button>
            <button class="">Bla Blah</button>
            <button class="">Bal Bahlh</button>
        </div>
    </div>
</section>
