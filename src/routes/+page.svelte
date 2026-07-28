<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Card from '$lib/components/Card.svelte';
    import FeatureBand from '$lib/components/FeatureBand.svelte';
    import SectionHeading from '$lib/components/SectionHeading.svelte';
    import Tag from '$lib/components/Tag.svelte';
    import type { PageData } from './$types';
    import { FILTERS, getFilteredItems, parceiros, urls } from './page.data';
    import '$lib/styles/home.scss';

    let { data }: { data: PageData } = $props();

    let filter = $state('todos');
    let navOpen = $state(false);

    const filteredItems = $derived(getFilteredItems(filter, data.podcastItems));

    function closeNav() {
        navOpen = false;
    }
</script>

<!-- ====== HERO ====== -->
<header class="relative overflow-hidden text-[var(--theme-black)]">
    <div class="relative bg-[var(--theme-white)] overflow-hidden">
        <!--<img
            src="/img/logo-hands.svg"
            alt=""
            class="absolute -top-6 -right-[70px] pointer-events-none opacity-[0.96] z-[1] w-[680px] h-auto max-md:scale-[0.6] max-md:origin-top-right max-md:opacity-45 max-sm:hidden"
            aria-hidden="true"
        />-->

        <nav class="relative z-[2] flex items-center gap-3.5 py-[22px] px-[var(--container-pad)] md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8">
            <a href="/" class="md:justify-self-start">
                <img class="w-40 h-auto" src="/img/logo-name-black.svg" alt="Lado a Lado" />
            </a>

            <div
                    class="navlinks hidden md:flex md:items-center md:justify-self-center md:gap-8"
                    class:navlinks--open={navOpen}
            >
                <a href="#sobre" onclick={closeNav}>Sobre</a>
                <a href="#fazemos" onclick={closeNav}>O que fazemos</a>
                <a href="#apoiar" onclick={closeNav}>Apoiar</a>
                <a href="#loja" onclick={closeNav}>Loja</a>
            </div>

            <div class="flex items-center gap-3 md:justify-self-end">
                <span class="hidden md:inline-flex">
                    <Button href="#comunidade" variant="outline" size="sm">Junta-te</Button>
                </span>
            </div>
        </nav>

        <div class="relative z-[2] max-w-[760px] mx-auto py-16 px-[var(--container-pad)] pb-28 text-center max-md:pt-9 max-md:pb-[72px]">
            <h1 class="[font-family:var(--font-display)] font-bold text-[clamp(3rem,9vw,7rem)] leading-[1.0] tracking-[-0.01em] text-[var(--theme-brown)] my-4 mb-7 max-md:whitespace-normal">
                Foste feito<br />para <span class="text-[var(--theme-red)]">amar</span>.
            </h1>
            <p class="font-[var(--font-sans)] text-xl/[1.5] max-w-[520px] mx-auto mb-[34px] text-[var(--theme-black)] max-md:text-[1.08rem]">
                Somos jovens que acreditam no amor verdadeiro, na fidelidade e em construir
                família lado a lado.
            </p>
            <div class="flex gap-3.5 flex-wrap justify-center">
                <Button href="#sobre" variant="primary" size="lg">Saber mais</Button>
                <Button href="#evento" variant="outline" size="lg">PrÃ³ximo evento</Button>
            </div>
        </div>
    </div>
</header>

<!-- ====== SOBRE / MISSÃO ====== -->
<section id="sobre" class="section text-center">
    <span class="eyebrow mb-6">Sobre</span>
    <p class="[font-family:var(--font-display)] font-[var(--font-display)] text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.28] text-[var(--theme-black)] mx-auto">
        O Lado a Lado existe para dar resposta ao<br />desejo mais profundo que todos temos:<br />amar e sermos amados.
    </p>

    <div class="stats flex flex-wrap justify-center gap-[clamp(28px,6vw,80px)] mt-[52px]">
        <div>
            <span>+3500</span>
            <span>Jovens impactados</span>
        </div>
        <div>
            <span>+40</span>
            <span>Eventos realizados</span>
        </div>
        <div>
            <span>+35</span>
            <span>Voluntários</span>
        </div>
    </div>
</section>

<!-- ====== COMUNIDADE ====== -->
<section id="comunidade" class="section">
    <SectionHeading eyebrow="A comunidade">Jovens como tu</SectionHeading>
    <p class="section-desc">
        Milhares de jovens que escolhem amar a sÃ©rio, por todo o paÃ­s.<br />NÃ£o se vive lado a
        lado sozinho.
    </p>

    <div class="slideshow">
        <div class="slide slide--1">
            <span class="slide-label">ConferÃªncia Â· auditÃ³rio cheio</span>
        </div>
        <div class="slide slide--2">
            <span class="slide-label">Run Club Â· corrida de domingo</span>
        </div>
        <div class="slide slide--3">
            <span class="slide-label">Passeio Â· fim de tarde juntos</span>
        </div>
        <div class="slide slide--4">
            <span class="slide-label">VoluntÃ¡rios Â· a montar tudo</span>
        </div>
    </div>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7 mt-16">
        <Card padding="0">
            <div class="aspect-video relative overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:block">
                <img src="/img/comunidade/padrinhos.jpg" alt="Casal padrinho com a sua famÃ­lia" />
            </div>
            <div class="card-body">
                <Tag tone="red">Apadrinhamento</Tag>
                <h3 class="font-[var(--font-display)] text-[1.9rem] leading-[1.1] text-[var(--theme-brown)] mt-0.5">
                    Caminhar com um casal padrinho</h3>
                <p class="font-[var(--font-ui)] text-base/[1.65] text-[var(--theme-black)] m-0">
                    Para namorados que querem ser acompanhados de forma pessoal e prÃ³xima, por um
                    casal jovem que jÃ¡ percorreu parte do caminho.
                </p>
                <div class="mt-auto pt-2.5">
                    <Button variant="outline" size="sm">Quero padrinhos</Button>
                </div>
            </div>
        </Card>

        <Card padding="0">
            <div class="aspect-video relative overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:block">
                <img
                        src="/img/comunidade/runclub-v3.jpg"
                        alt="Jovens do Run Club a caminhar de t-shirt amarela"
                />
            </div>
            <div class="card-body">
                <Tag tone="yellow">Run &amp; Walk Club</Tag>
                <h3 class="font-[var(--font-display)] text-[1.9rem] leading-[1.1] text-[var(--theme-brown)] mt-0.5">
                    Conhecer gente, lado a lado</h3>
                <p class="font-[var(--font-ui)] text-base/[1.65] text-[var(--theme-black)] m-0">
                    Corridas, passeios e convÃ­vios abertos a todos. A forma mais simples e
                    descontraÃ­da de fazer amigos e fazer parte do Lado a Lado.
                </p>
                <div class="mt-auto pt-2.5">
                    <Button
                            href="https://chat.whatsapp.com/KF7jiQ9Kzmx4Su3DtO0t83?mode=gi_t"
                            target="_blank"
                            variant="outline"
                            size="sm">Entrar na comunidade
                    </Button
                    >
                </div>
            </div>
        </Card>
    </div>
</section>

<!-- ====== O QUE FAZEMOS ====== -->
<section id="fazemos" class="section">
    <SectionHeading eyebrow="Atividades">O que fazemos?</SectionHeading>
    <p class="section-desc">
        NÃ£o nascemos ensinados. TambÃ©m temos que aprender a amar.
    </p>

    <div class="flex flex-wrap gap-2.5 justify-center my-11 mx-0">
        {#each FILTERS as f}
            <button class="cursor-pointer inline-flex bg-transparent border-none p-0 transition-transform duration-[140ms] ease-out hover:scale-105"
                    onclick={() => (filter = f.key)}>
                <Tag tone={filter === f.key ? 'red' : 'outline'}>{f.label}</Tag>
            </button>
        {/each}
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {#each filteredItems as item}
            <Card padding="24px">
                <div class="flex flex-col gap-3.5 h-full">
                    <div class="flex items-center justify-between gap-2.5">
                        <Tag tone={item.typeTone}>{item.typeLabel}</Tag>
                        <Tag tone={item.statusTone}>{item.statusLabel}</Tag>
                    </div>
                    <h3 class="font-[var(--font-display)] text-[1.7rem] leading-[1.12] text-[var(--theme-brown)] mt-1.5">{item.title}</h3>
                    <span class="font-[var(--font-mono)] text-[0.78rem] tracking-[0.08em] uppercase text-[var(--theme-black)] opacity-60">{item.meta}</span>
                    {#if item.showCta}
                        <div class="mt-auto pt-2">
                            <Button
                                    variant="outline"
                                    size="sm"
                                    href={item.href}
                                    target={item.href ? '_blank' : undefined}>{item.ctaLabel}</Button
                            >
                        </div>
                    {/if}
                </div>
            </Card>
        {/each}
    </div>
</section>

<!-- ====== FEATURE BAND ====== -->
<FeatureBand>
    <span>Descobre o sentido da vida no amor</span>
</FeatureBand>

<!-- ====== PRÃ“XIMO EVENTO ====== -->
<section id="evento" class="section pt-6">
    <div class="evento-grid">
        <div class="py-14 px-[clamp(28px,4vw,56px)]">
            <span class="eyebrow">PRÃ“XIMO EVENTO</span>
            <span class="eyebrow eyebrow--sub">SETEMBRO 2026 Â· LISBOA</span>
            <div class="flex gap-2.5 my-[18px]">
                <Tag tone="red">ConferÃªncia</Tag>
            </div>
            <h2 class="font-[var(--font-display)] text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] text-[var(--theme-brown)] my-3.5 mb-4">
                Feitos para amar</h2>
            <p class="font-[var(--font-ui)] text-[1.05rem]/[1.7] text-[var(--theme-black)] max-w-[440px] mb-[30px]">
                2Âª ediÃ§Ã£o de um evento ao vivo com casais convidados e especialistas para falar
                sobre namoro, casamento e famÃ­lia.
            </p>
            <Button variant="primary" size="lg">Reserva o teu lugar</Button>
        </div>

        <div class="evento-image">
            <img
                    src="/img/eventos/evento-lisboa.jpg"
                    alt="Plateia num evento Lado a Lado em Lisboa"
            />
            <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(91,20,30,0.45)_0%,rgba(91,20,30,0)_38%)]"></div>
        </div>
    </div>
</section>

<!-- ====== TESTEMUNHOS ====== -->
<section class="testemunhos">
    <div class="testemunhos-inner">
        <SectionHeading eyebrow="Testemunhos">Vidas mudadas lado a lado</SectionHeading>

        <div class="testemunhos-grid">
            <figure class="testemunhos-card">
                <blockquote>
                    <span class="text-[var(--theme-red)]">"</span>SaÃ­ de lÃ¡ a acreditar outra vez
                    que vale a pena amar para sempre.<span class="text-[var(--theme-red)]">"</span>
                </blockquote>
                <figcaption>
                    <div class="testemunhos-avatar">
                        <div class="absolute inset-0 bg-[var(--theme-red)] rounded-full"></div>
                        <img src="/img/testemunhos/testi-1.png" alt="Maria" />
                    </div>
                    <div class="flex flex-col">
                        <strong class="font-[var(--font-sans)] font-bold text-[0.98rem] text-[var(--theme-brown)]">Maria</strong>
                        <span class="font-[var(--font-ui)] text-[0.88rem] text-[var(--theme-black)] opacity-60">25 anos, Porto</span>
                    </div>
                </figcaption>
            </figure>

            <figure class="testemunhos-card">
                <blockquote>
                    <span class="text-[var(--theme-red)]">"</span>Pensava que o compromisso era
                    antiquado. Hoje sei que Ã© a coisa mais corajosa que existe.<span
                        class="text-[var(--theme-red)]">"</span
                >
                </blockquote>
                <figcaption>
                    <div class="testemunhos-avatar">
                        <div class="absolute inset-0 bg-[var(--theme-red)] rounded-full"></div>
                        <img src="/img/testemunhos/testi-2.png" alt="Joana" />
                    </div>
                    <div class="flex flex-col">
                        <strong class="font-[var(--font-sans)] font-bold text-[0.98rem] text-[var(--theme-brown)]">Joana</strong>
                        <span class="font-[var(--font-ui)] text-[0.88rem] text-[var(--theme-black)] opacity-60">22 anos, Lisboa</span>
                    </div>
                </figcaption>
            </figure>

            <figure class="testemunhos-card">
                <blockquote>
                    <span class="text-[var(--theme-red)]">"</span>Aprendi que o amor tambÃ©m se
                    trabalha, e que nÃ£o estou sozinho nesta caminhada.<span
                        class="text-[var(--theme-red)]">"</span
                >
                </blockquote>
                <figcaption>
                    <div class="testemunhos-avatar">
                        <div class="absolute inset-0 bg-[var(--theme-red)] rounded-full"></div>
                        <img src="/img/testemunhos/testi-3.png" alt="Rafael" />
                    </div>
                    <div class="flex flex-col">
                        <strong class="font-[var(--font-sans)] font-bold text-[0.98rem] text-[var(--theme-brown)]">Rafael</strong>
                        <span class="font-[var(--font-ui)] text-[0.88rem] text-[var(--theme-black)] opacity-60">28 anos, Braga</span>
                    </div>
                </figcaption>
            </figure>
        </div>
    </div>
</section>

<!-- ====== LOJA / MERCH ====== -->
<section id="loja" class="section">
    <div class="flex items-end justify-between gap-6 flex-wrap mb-12">
        <SectionHeading eyebrow="Loja" align="start">Veste o que defendes</SectionHeading>
        <Button variant="outline" size="md">Ver toda a loja</Button>
    </div>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[26px]">
        <Card padding="0">
            <div class="loja-product-img" style="background:#E7C200;">
                <img src="/img/merch/tshirt-runclub.png" alt="T-shirt Run Club" />
                <span class="absolute left-3.5 top-3.5"><Tag tone="red">DisponÃ­vel</Tag></span>
            </div>
            <div class="loja-product-body">
                <div class="loja-product-head">
                    <strong>T-shirt Run Club</strong>
                    <span class="font-[var(--font-mono)] font-bold text-[var(--theme-red)] whitespace-nowrap">14â‚¬</span>
                </div>
                <p class="font-[var(--font-display)] italic text-[1.05rem]/[1.35] text-[var(--theme-brown)] m-0">
                    "NÃ£o Ã© um sprint. Ã‰ uma maratona. Como o amor. Como a vida. Como tudo o que
                    vale a pena."
                </p>
                <Button variant="primary" size="sm">Comprar</Button>
            </div>
        </Card>

        <Card padding="0">
            <div class="loja-product-img" style="background:#EDE8DC;">
                <img src="/img/main/meias.jpg" alt="Meias Lado a Lado" />
                <span class="absolute left-3.5 top-3.5"><Tag tone="yellow">Brevemente</Tag></span>
            </div>
            <div class="loja-product-body">
                <div class="loja-product-head">
                    <strong>Meias Lado a Lado</strong>
                    <span class="font-[var(--font-mono)] font-bold text-[var(--theme-red)] whitespace-nowrap">8â‚¬</span>
                </div>
                <p class="font-[var(--font-display)] italic text-[1.05rem]/[1.35] text-[var(--theme-brown)] m-0">
                    O amor nÃ£o Ã© descartÃ¡vel... e as tuas meias tambÃ©m nÃ£o.
                </p>
                <Button variant="primary" size="sm">PrÃ©-reserva</Button>
            </div>
        </Card>

        <Card padding="0">
            <div class="loja-product-img" style="background:var(--theme-brown);">
                <img src="/img/merch/jogo-perguntas.png" alt="Jogo de perguntas para namorados" />
                <span class="absolute left-3.5 top-3.5"><Tag tone="yellow">Brevemente</Tag></span>
            </div>
            <div class="loja-product-body">
                <div class="loja-product-head">
                    <strong>Jogo para namorados</strong>
                    <span class="font-[var(--font-mono)] font-bold text-[var(--theme-red)] whitespace-nowrap">22â‚¬</span>
                </div>
                <p class="font-[var(--font-display)] italic text-[1.05rem]/[1.35] text-[var(--theme-brown)] m-0">
                    EstÃ¡s a namorar? Calma! NÃ£o te cases antes de fazeres estas 100 perguntas!
                </p>
                <Button variant="primary" size="sm">PrÃ©-reserva</Button>
            </div>
        </Card>
    </div>
</section>

<!-- ====== APOIAR ====== -->
<section id="apoiar" class="section">
    <SectionHeading eyebrow="Apoiar">Faz parte de quem torna isto possÃ­vel</SectionHeading>
    <p class="section-desc">
        O Lado a Lado vive do contributo de quem se identifica com esta missÃ£o.
    </p>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7 mt-14">
        <Card padding="40px 38px 42px">
            <div class="apoiar-card">
                <Tag tone="red">Doar</Tag>
                <h3>Apoia com um donativo</h3>
                <p>
                    Cada contributo ajuda a levar campos, cursos e eventos a mais jovens por todo o
                    paÃ­s. Qualquer valor faz diferenÃ§a.
                </p>
                <div class="mt-auto pt-3">
                    <Button variant="primary" size="md">Quero doar</Button>
                </div>
            </div>
        </Card>

        <Card padding="40px 38px 42px">
            <div class="apoiar-card">
                <Tag tone="yellow">Voluntariado</Tag>
                <h3>Junta-te como voluntÃ¡rio</h3>
                <p>
                    DÃ¡ o teu tempo e talento a montar eventos, acompanhar jovens, concretizar ideias
                    e manter esta missÃ£o viva. Trabalhamos lado a lado, na prÃ¡tica.
                </p>
                <div class="mt-auto pt-3">
                    <Button variant="outline" size="md">Quero ser voluntÃ¡rio</Button>
                </div>
            </div>
        </Card>
    </div>
</section>

<!-- ====== NEWSLETTER ====== -->
<section id="newsletter" class="newsletter">
    <div class="newsletter-inner">
        <span class="eyebrow text-[var(--theme-brown)]">Junta-te</span>
        <h2 class="font-[var(--font-display)] text-[clamp(1.9rem,3.4vw,2.8rem)] text-[var(--theme-brown)] my-3.5">NÃ£o
            fiques de fora</h2>
        <p class="font-[var(--font-ui)] text-[1.05rem]/[1.6] text-[var(--theme-brown)] mb-[30px]">
            Recebe novidades, eventos e conteÃºdos para amar melhor â€” direto no teu email.
        </p>
        <form class="newsletter-form" onsubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="O teu email" class="newsletter-input" />
            <Button variant="deep" size="lg">Quero entrar</Button>
        </form>
    </div>
</section>

<!-- ====== PARCEIROS ====== -->
<section class="section text-center">
    <span class="eyebrow mb-10">Parceiros</span>
    <div class="flex flex-wrap items-center justify-center gap-[clamp(28px,6vw,64px)] max-sm:gap-[26px_32px]">
        {#each parceiros as [ src, alt ]}
            <img {src}
                 {alt}
                 class="h-[54px] w-auto max-w-[160px] object-contain opacity-90 transition-opacity duration-[240ms] hover:opacity-100 max-sm:h-[42px]" />
        {/each}
    </div>
</section>

<!-- ====== FAIXA FINAL ====== -->
<FeatureBand>
    <span>Que a tua histÃ³ria termine com " ... e viveram</span>
    <img
            src="/img/lado-a-lado-frase.svg"
            alt="Lado a Lado"
            class="h-[27px] w-auto"
    />
    <span>para sempre."</span>
</FeatureBand>

<!-- ====== INSTAGRAM ====== -->
<section class="section">
    <div class="instagram-inner">
        <h2 class="font-[var(--font-sans)] font-bold text-[clamp(1rem,2vw,1.3rem)] text-[var(--theme-brown)] text-center mb-12">
            NÃ£o deixes escapar nada...</h2>
        <div class="instagram-grid">
            {#each urls as url}
                <blockquote
                        class="instagram-media"
                        data-instgrm-permalink={url}
                        data-instgrm-version="14"
                        style="max-width:320px; width:100%;"
                ></blockquote>
            {/each}
        </div>
        <script async src="https://www.instagram.com/embed.js"></script>
    </div>
</section>
