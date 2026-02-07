<script lang="ts">
    let urls = [
        "https://www.instagram.com/p/C56qvfXrgOt/",
        "https://www.instagram.com/p/DS5yxuPAHYZ",
        "https://www.instagram.com/p/DRArNGgDj6Z/",
        "https://www.instagram.com/p/DNodamaM1Ha/",
        "https://www.instagram.com/p/DNl0_GxgAIX/",
        "https://www.instagram.com/p/DNjEyhYAeYg/",
        "https://www.instagram.com/p/DNgrMfogjSK/",
        "https://www.instagram.com/p/DMsQFS9s0Tj/",
    ] as const;
    const parceiros = [
        [ "/img/main/ucp.svg", 4 ],
        [ "/img/main/fertility-care.svg", 10 ],
        [ "/img/main/vale-estevao.svg", 10 ],
        [ "/img/main/aese.svg", 3 ],
        // [ "/img/main/bolsas.jpg", 4 ],
        [ "/img/main/fundação-beatriz.svg", 3 ],
        [ "/img/main/fundação-MJ.png", 6 ],
    ] as const satisfies [ string/* file */, number/* width */ ][];

    const sections = [
        [ 'eventos', 'Eventos' ],
        [ 'campos', 'Campos' ],
        [ 'podcasts', 'Podcasts' ],
        [ 'cursos', 'Cursos' ],
        [ 'voluntariado', 'Voluntariado' ],
        [ 'doacoes', 'Doações' ],
    ] as const;
    let activeSection = $state('');

    $effect(() => {
        const observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) {
                            activeSection = entry.target.id;
                        }
                    }
                },
                { rootMargin: '-40% 0px -60% 0px' },
        );

        for (const [ id ] of sections) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }

        return () => observer.disconnect();
    });
</script>

<!-- Hero Section -->
<section
        class="hero min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
    <div class="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <img src="/img/logo-name-yellow.svg" alt="Lado a Lado" class="h-6 md:h-10 w-auto brightness-0" />
    </div>

    <div class="text-center max-w-4xl mx-auto">
        <h1 class="rubik color-brown text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Foste feito<br />para <span class="color-red">amar</span>.
        </h1>

        <p class="rubik color-red text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            inspirar jovens a descobrir o sentido da vida no amor.
        </p>

        <button class="reddy-button"> Descobre Como</button>
    </div>

    <div class="stats grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
        <div>
            <h3>3500+</h3>
            <p>Jovens impactados</p>
        </div>
        <div>
            <h3>40+</h3>
            <p>Eventos realizados</p>
        </div>
        <div>
            <h3>35+</h3>
            <p>Voluntários</p>
        </div>
    </div>
</section>

<!-- Navigation Buttons (Sticky) -->
<nav class="sticky top-0 bg-yellow shadow-md z-30">
    <div class="flex justify-center items-center gap-4 py-4 flex-wrap px-4">
        {#each sections as [id, label]}
            <a href="#{id}" class="reddy-button" class:active={activeSection === id}>{label}</a>
        {/each}
    </div>
</nav>

<!-- Live Conferences Section -->
<section id="eventos" class="p-16 px-4 bg-white">
    <div class="max-w-[64rem] mx-auto">
        <div class="text-center mb-12 md:text-left">
            <h2 class="rubik color-brown font-bold mb-4 text-5xl">
                Eventos ao vivo
            </h2>
            <p class="rubik color-red text-lg font-light">
                que inspiram a descobrir o porquê de estarmos vivos!
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div class="border-2 border-[var(--theme-brown)] rounded-lg p-6 transition-shadow duration-150 hover:shadow-lg">
                <h3 class="rubik color-brown font-bold text-xl mb-2"> 30 de Setembro </h3>
                <p class="rubik color-brown text-lg">Porto</p>
                <p class="rubik color-red text-base mt-2">Feitos para amar</p>
            </div>
            <div class="border-2 border-[var(--theme-brown)] rounded-lg p-6 transition-shadow duration-150 hover:shadow-lg">
                <h3 class="rubik color-brown font-bold text-xl mb-2">19 de Junho</h3>
                <p class="rubik color-brown text-lg">Lisboa</p>
                <p class="rubik color-red text-base mt-2">Feitos para amar</p>
            </div>
        </div>

        <div>
            <button class="reddy-button">Inscreve-te aqui!</button>
        </div>
    </div>
</section>

<!-- Campos de Formação Section -->
<section id="campos" class="p-16 px-4 bg-white">
    <div class="max-w-[64rem] mx-auto">
        <div class="text-end mb-12">
            <h2 class="rubik color-brown font-bold mb-4 text-4xl md:text-5xl">
                Campos voluntariado & formação
            </h2>
            <p class="rubik color-red text-lg font-light">
                para trazer ao de cima todo o potencial do corpo e da mente!
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src="/img/main/campos.jpg" alt="Campo de formação" class="rounded-2xl w-full object-cover" />

            <div>
                <h3 class="overpass-mono color-brown font-bold text-xl mb-4 uppercase">Próximos Campos</h3>
                <ul class="space-y-3 rubik color-brown mb-8">
                    <li class="flex items-center gap-2">
                        <span class="color-red font-bold">•</span>
                        fim de semana – TBD
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="color-red font-bold">•</span>
                        1 semana agosto 2026 – TBD
                    </li>
                </ul>
                <button class="reddy-button">Inscreve-te aqui</button>
            </div>
        </div>
    </div>
</section>

<!-- Cursos Section -->
<section id="cursos" class="p-16 px-4 bg-white">
    <div class="max-w-[64rem] mx-auto">
        <div class="mb-12">
            <h2 class="rubik color-brown font-bold mb-4 text-4xl md:text-5xl">
                Cursos para jovens
            </h2>
            <p class="rubik color-red text-lg font-light">
                sobre o namoro, casamento e família!
            </p>
        </div>

        <div>
            <h3 class="overpass-mono color-brown font-bold text-xl mb-4 uppercase">Próximos Cursos</h3>
            <ul class="space-y-3 rubik color-brown mb-8">
                <li class="flex items-center gap-2">
                    <span class="color-red font-bold">•</span>
                    fim de semana – TBD
                </li>
                <li class="flex items-center gap-2">
                    <span class="color-red font-bold">•</span>
                    1 semana agosto 2026 – TBD
                </li>
            </ul>
            <button class="reddy-button">Inscreve-te aqui</button>
        </div>
    </div>
</section>

<!-- Podcasts Section -->
<section id="podcasts" class="p-16 px-4 bg-white">
    <div class="max-w-[64rem] mx-auto">
        <div class="text-right mb-12">
            <h2 class="rubik color-brown font-bold mb-4 text-5xl">Podcast</h2>
            <p class="rubik color-red text-lg font-light">
                com casais convidados e especialistas para responder às tuas perguntas!
            </p>
        </div>
        <div class="flex justify-end irems-center gap-8">
            <a class="h-16 w-16" href="https://open.spotify.com/show/79y8yNDSivKHovVU28g4oI?si=7f2c649a98df410e">
                <img src="/img/icons/spoti.svg" alt="Spotify" class="podcast-icon" />
            </a>
            <a class="h-20 w-20" href="https://www.youtube.com/@lado_a_lado">
                <img src="/img/icons/yt.svg" alt="YouTube" class="podcast-icon" />
            </a>
        </div>
    </div>
</section>

<!-- Meias Section -->
<section class="p-16 px-4 bg-white">
    <div class="max-w-[64rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="flex flex-col items-center">
            <img src="/img/main/meias.jpg" alt="Meias Lado a Lado" class="max-w-xs w-full" />
            <button class="reddy-button mt-6">Reserva aqui</button>
        </div>

        <div>
            <h2 class="rubik color-brown font-bold text-4xl md:text-5xl mb-6 leading-tight">
                Calça a meia.<br />Vive o <span class="color-red">sentido</span>.
            </h2>
            <p class="rubik color-red text-lg font-light">
                o amor não é descartável. e as tuas meias também não.
            </p>
        </div>
    </div>
</section>

<!-- Call to Action Section -->
<section id="doacoes" class="my-32 px-4 text-white">
    <div class="max-w-[64rem] mx-auto">
        <h2 class="rubik color-brown text-6xl font-bold mb-6">
            <p>Junta-te ao Movimento.</p>
            <p> Vamos impactar <span class="color-red">lado a lado</span>. </p>
        </h2>
        <p class="color-red">
            <span class="font-bold">temos um sonho: que todos os jovens descubram que foram feitos para amar!</span>
            <br /><br />
            junta-te a nós, vamos a espalhar a mensagem de que é possível amar a
            vida toda, com fidelidade e generosidade.<br /><br />
            torna-te impulsionador ou voluntário!
        </p>
        <div class="mt-8 flex gap-8">
            <button class="reddy-button"> Impulsiona</button>
            <button class="reddy-button"> Candidata-te</button>
        </div>
    </div>
</section>

<!-- partners section -->
<section class="flex flex-col items-center mb-16">
    <h3 class="rubik color-brown text-lg font-bold">Parceiros</h3>
    <div class="flex justify-center items-center gap-16 flex-wrap p-8">
        {#each parceiros as [parceiro, scale]}
            <img src={parceiro} alt="Parceiro Logo" class="w-auto" style="height: {scale}rem" />
        {/each}
    </div>
</section>

<!-- Instagram Section -->
<section>
    <div class="max-w-[80vw] mx-auto">
        <div class="text-center mb-12">
            <h2 class="rubik color-brown font-bold mb-4 text-lg md:text-xl">
                Não deixes escapar nada...
            </h2>
        </div>

        <div class="flex gap-4 overflow-x-auto py-4 md:grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:overflow-visible md:gap-8">
            {#each urls as url}
                <blockquote class="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14"
                            style="max-width:320px; width:100%;"></blockquote>
            {/each}
        </div>

        <script async src="https://www.instagram.com/embed.js"></script>
    </div>
</section>

<style lang="scss">
    :global(html) {
        scroll-behavior: smooth;
    }

    :global([id]) {
        scroll-margin-top: 5rem;
    }

    .hero .stats div {
        @apply p-6;

        h3 {
            @apply text-5xl font-bold mb-2;
            font-family: "Rubiks", sans-serif;
            color: var(--theme-brown);
        }

        p {
            @apply text-lg;
            color: var(--theme-red);
            font-family: "Open Sans", sans-serif;
        }
    }

    .reddy-button {
        font-family: "OverpassMono", monospace;
        text-transform: uppercase;
        color: var(--theme-red);
        border: 2px solid var(--theme-red);
        background: transparent;
        padding: 0.5rem 1.25rem;
        border-radius: 9999px;
        font-weight: 600;

        &:hover {
            color: var(--theme-yellow);
            background-color: var(--theme-red);
        }

        &:active {
            box-shadow: inset 0 0 15px -5px var(--theme-black);
        }

        &.active {
            color: var(--theme-yellow);
            background-color: var(--theme-red);
        }
    }

    .podcast-icon {
        @apply flex justify-center items-center;
        filter: hue-rotate(286deg) saturate(54%) brightness(32%);
    }
</style>
