<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Card from '$lib/components/Card.svelte';
    import FeatureBand from '$lib/components/FeatureBand.svelte';
    import SectionHeading from '$lib/components/SectionHeading.svelte';
    import Tag from '$lib/components/Tag.svelte';
    import type { PageData } from './$types';
    import { FILTERS, getFeaturedItems, getFilteredItems, parceiros, urls } from './page.data';
    import '$lib/styles/home.scss';

    let { data }: { data: PageData } = $props();

    let filter = $state('destaques');
    let navOpen = $state(false);

    const filteredItems = $derived(getFilteredItems(filter, data.podcastItems));
    const visibleItems = $derived(
        filter === 'destaques'
            ? getFeaturedItems(data.podcastItems)
            : filteredItems
    );

    function closeNav() {
        navOpen = false;
    }

    function onWindowKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') closeNav();
    }
</script>

<svelte:window onkeydown={onWindowKeydown} />

<!-- ====== HERO ====== -->
<header class="relative overflow-hidden text-[var(--theme-black)]">
    <div class="relative bg-[var(--theme-cream)] overflow-hidden">
        <!--<img
            src="/img/logo-hands.svg"
            alt=""
            class="absolute -top-6 -right-[70px] pointer-events-none opacity-[0.96] z-[1] w-[680px] h-auto max-md:scale-[0.6] max-md:origin-top-right max-md:opacity-45 max-sm:hidden"
            aria-hidden="true"
        />-->

        <nav class="site-nav relative z-30 flex items-center justify-between gap-3.5 py-[22px] px-[var(--container-pad)] nav:grid nav:grid-cols-[1fr_auto_1fr] nav:gap-8">
            <a href="/" class="site-nav__brand nav:justify-self-start">
                <img class="w-40 h-auto" src="/img/logo-name-black.svg" alt="Lado a Lado" />
            </a>

            <div
                    id="nav-principal"
                    class="navlinks hidden nav:static nav:z-auto nav:flex nav:flex-row nav:items-center nav:justify-self-center nav:gap-8"
                    class:navlinks--open={navOpen}
                    style:position={navOpen ? 'fixed' : undefined}
                    style:inset={navOpen ? '0' : undefined}
            >
                <a href="#sobre" onclick={closeNav}>Sobre</a>
                <a href="#fazemos" onclick={closeNav}>O que fazemos</a>
                <a href="#apoiar" onclick={closeNav}>Apoiar</a>
                <a href="#loja" onclick={closeNav}>Loja</a>
                <a href="#comunidade" class="navlinks__cta nav:hidden" onclick={closeNav}>Junta-te</a>
            </div>

            <div class="site-nav__actions flex items-center gap-3 nav:justify-self-end">
                <span class="hidden nav:inline-flex">
                    <Button href="#comunidade" variant="outline" size="sm">Junta-te</Button>
                </span>
                <button
                        type="button"
                        class="burger nav:hidden"
                        class:burger--open={navOpen}
                        aria-expanded={navOpen}
                        aria-controls="nav-principal"
                        aria-label={navOpen ? 'Fechar menu' : 'Abrir menu'}
                        onclick={() => (navOpen = !navOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>

        <div class="relative z-[2] max-w-3xl mx-auto pt-9 pb-16 nav:py-16 nav:pb-28 px-[var(--container-pad)] text-center">
            <h1 class="font-display font-medium [-webkit-text-stroke:0.5px_currentColor] text-[clamp(3rem,9vw,7rem)] leading-[1.0] tracking-[-0.01em] text-[var(--theme-brown)] my-4 mb-7">
                Foste feito<br />para <span class="color-red">amar</span>.
            </h1>
            <p class="font-sans text-xl/[1.5] max-w-[520px] mx-auto mb-[34px] text-[var(--theme-black)] max-md:text-[1.08rem]">
                Somos jovens que acreditam no amor verdadeiro, na fidelidade e em construir
                família lado a lado.
            </p>
            <div class="flex gap-3.5 flex-wrap justify-center">
                <Button href="#sobre" variant="primary" size="lg">Saber mais</Button>
                <Button href="#evento" variant="outline" size="lg">Próximo evento</Button>
            </div>
        </div>
    </div>
</header>

<!-- ====== SOBRE / MISSÃƒO ====== -->
<section id="sobre" class="section text-center">
    <span class="eyebrow mb-6">Sobre</span>
    <p class="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.28] text-[var(--theme-black)] mx-auto [text-wrap:balance]">
        <span class="md:block">O Lado a Lado existe para dar resposta ao</span>
        <span class="md:block">desejo mais profundo que todos temos:</span>
        <span class="md:block">amar e sermos amados.</span>
    </p>

    <div class="stats flex flex-wrap justify-center gap-[clamp(28px,6vw,80px)] mt-[52px]">
        <div>
            <span class="font-display">+3500</span>
            <span class="font-mono">Jovens impactados</span>
        </div>
        <div>
            <span class="font-display">+40</span>
            <span class="font-mono">Eventos realizados</span>
        </div>
        <div>
            <span class="font-display">+35</span>
            <span class="font-mono">Voluntários</span>
        </div>
    </div>
</section>

<!-- ====== COMUNIDADE ====== -->
<section id="comunidade" class="section">
    <SectionHeading eyebrow="A comunidade">Jovens como tu</SectionHeading>
    <p class="section-desc font-ui">
        Milhares de jovens que escolhem amar a sério, por todo o país.<br />Não se vive lado a
        lado sozinho.
    </p>

    <div class="slideshow">
        <div class="slide slide--1">
            <img src="/img/comunidade/auditório.jpg" alt="Auditório cheio durante uma conferência" />
            <span class="slide-label">Conferência &middot; auditório cheio</span>
        </div>
        <div class="slide slide--2">
            <img src="/img/comunidade/equipa.jpg" alt="Equipa de voluntários do Lado a Lado" />
            <span class="slide-label">Voluntários &middot; a montar tudo</span>
        </div>
    </div>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-7 mt-16">
        <Card padding="0">
            <div class="aspect-video relative overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:block">
                <img src="/img/comunidade/padrinhos.jpg" alt="Casal padrinho com a sua família" />
            </div>
            <div class="card-body">
                <div class="flex gap-2">
                    <Tag tone="red">Apadrinhamento</Tag>
                </div>
                <h3 class="font-display text-[1.9rem] leading-[1.1] text-[var(--theme-brown)] mt-0.5">
                    Caminhar com um casal padrinho</h3>
                <p class="font-ui text-base/[1.65] text-[var(--theme-black)] m-0">
                    Para namorados que querem ser acompanhados de forma pessoal e próxima, por um
                    casal jovem que já percorreu parte do caminho. Conversas reais, exemplo vivo e alguém a torcer por
                    vocês a cada passo.
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
                <div class="flex gap-2">
                    <Tag tone="yellow">Run &amp; Walk Club</Tag>
                </div>
                <h3 class="font-display text-[1.9rem] leading-[1.1] text-[var(--theme-brown)] mt-0.5">
                    Conhecer gente, lado a lado</h3>
                <p class="font-ui text-base/[1.65] text-[var(--theme-black)] m-0">
                    Corridas, passeios e convívios abertos a todos. A forma mais simples e
                    descontraída de fazer amigos, conhecer pessoas e fazer parte do Lado a Lado.
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
        Não nascemos ensinados. Também temos que aprender a amar.
    </p>

    <div class="flex flex-wrap gap-2.5 justify-center my-11 mx-0">
        {#each FILTERS as f}
            <button class="cursor-pointer inline-flex bg-transparent border-none p-0 transition-transform duration-[140ms] ease-out hover:scale-105"
                    onclick={() => (filter = f.key)}>
                <Tag tone={filter === f.key ? 'red' : 'outline'}>{f.label}</Tag>
            </button>
        {/each}
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-6">
        {#each visibleItems as item}
            <Card padding="24px">
                <div class="flex flex-col gap-3.5 h-full">
                    <div class="flex items-center justify-between gap-2.5">
                        <Tag tone={item.typeTone}>{item.typeLabel}</Tag>
                        <Tag tone={item.statusTone}>{item.statusLabel}</Tag>
                    </div>
                    <h3 class="font-display text-[1.7rem] leading-[1.12] text-[var(--theme-brown)] mt-1.5">{item.title}</h3>
                    <span class="font-mono text-[0.78rem] tracking-[0.08em] uppercase text-[var(--theme-black)] opacity-60">{item.meta}</span>
                    {#if item.showCta}
                        <div class="mt-auto pt-2">
                            <Button variant="outline"
                                    size="sm"
                                    href={item.href}
                                    target={item.href ? '_blank' : undefined}>
                                {item.ctaLabel}
                            </Button>
                        </div>
                    {/if}
                </div>
            </Card>
        {/each}
    </div>
    <div class=activities-show-all style:display={filter===`todos`?`none`:undefined}>
        <button type=button onclick={() => (filter = `todos`)}>Ver todas as atividades</button>
    </div>
</section>

<!-- ====== FEATURE BAND ====== -->
<FeatureBand>
    <span>Descobre o sentido da vida no amor</span>
</FeatureBand>

<!-- ====== PRÓXIMO EVENTO ====== -->
<section id="evento" class="section">
    <div class="evento-grid">
        <div class="py-14 px-[clamp(28px,4vw,56px)] min-w-0">
            <span class="eyebrow">PRÓXIMO EVENTO</span>
            <span class="eyebrow eyebrow--sub">SETEMBRO 2026 &middot; LISBOA</span>
            <div class="flex gap-2.5 my-[18px]">
                <Tag tone="red">Conferência</Tag>
            </div>
            <h2 class="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] text-[var(--theme-brown)] my-3.5 mb-4">
                Feitos para amar</h2>
            <p class="font-ui text-[1.05rem]/[1.7] text-[var(--theme-black)] max-w-[440px] mb-[30px]">
                2ª edição de um evento ao vivo com casais convidados e especialistas para falar
                sobre namoro, casamento e família.
            </p>
            <Button class="max-phone:w-full max-phone:px-4 max-phone:py-[18px] max-phone:text-sm max-phone:tracking-[0.08em]" variant="primary" size="lg">Reserva o teu lugar</Button>
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
                    <span class="quotation-mark">&ldquo;</span><span class="quote">Saí de lá a acreditar outra vez que
                    vale a pena amar para sempre.</span><span class="quotation-mark">&rdquo;</span>
                </blockquote>
                <figcaption>
                    <div class="testemunhos-avatar">
                        <div class="testemunhos-avatar-backdrop"></div>
                        <img src="/img/testemunhos/testi-1.png" alt="Maria" />
                    </div>
                    <div class="testemunhos-author">
                        <strong class="testemunhos-author-name">Maria</strong>
                        <span class="testemunhos-author-meta">25 anos, Porto</span>
                    </div>
                </figcaption>
            </figure>

            <figure class="testemunhos-card">
                <blockquote>
                    <span class="quotation-mark">&ldquo;</span><span class="quote">Pensava que o compromisso era
                    antiquado. Hoje sei que é a coisa mais corajosa que existe.</span><span
                        class="quotation-mark">&rdquo;</span>
                </blockquote>
                <figcaption>
                    <div class="testemunhos-avatar">
                        <div class="testemunhos-avatar-backdrop"></div>
                        <img src="/img/testemunhos/testi-2.png" alt="Joana" />
                    </div>
                    <div class="testemunhos-author">
                        <strong class="testemunhos-author-name">Joana</strong>
                        <span class="testemunhos-author-meta">22 anos, Lisboa</span>
                    </div>
                </figcaption>
            </figure>

            <figure class="testemunhos-card">
                <blockquote>
                    <span class="quotation-mark">&ldquo;</span><span class="quote">Aprendi que o amor também se
                    trabalha, e que não estou sozinho nesta caminhada.</span><span
                        class="quotation-mark">&rdquo;</span>
                </blockquote>
                <figcaption>
                    <div class="testemunhos-avatar">
                        <div class="testemunhos-avatar-backdrop"></div>
                        <img src="/img/testemunhos/testi-3.png" alt="Rafael" />
                    </div>
                    <div class="testemunhos-author">
                        <strong class="testemunhos-author-name">Rafael</strong>
                        <span class="testemunhos-author-meta">28 anos, Braga</span>
                    </div>
                </figcaption>
            </figure>
        </div>
    </div>
</section>

<!-- ====== LOJA / MERCH ====== -->
<!--
<section id="loja" class="section">
    <div class="flex items-end justify-between gap-6 flex-wrap mb-12">
        <SectionHeading eyebrow="Loja" align="start">Veste o que defendes</SectionHeading>
        <Button variant="outline" size="md">Ver toda a loja</Button>
    </div>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-[26px]">
        <Card padding="0">
            <div class="loja-product-img" style="background:#E7C200;">
                <img src="/img/merch/tshirt-runclub.png" alt="T-shirt Run Club" />
                <span><Tag tone="red">Disponível</Tag></span>
            </div>
            <div class="loja-product-body">
                <div class="loja-product-head">
                    <strong>T-shirt Run Club</strong>
                    <span>14€</span>
                </div>
                <p>
                    "Não é um sprint. É uma maratona. Como o amor. Como a vida. Como tudo o que
                    vale a pena."
                </p>
                <div class="cta">
                    <Button variant="primary" size="sm">Comprar</Button>
                </div>
            </div>
        </Card>

        <Card padding="0">
            <div class="loja-product-img" style="background:#EDE8DC;">
                <img src="/img/main/meias.jpg" alt="Meias Lado a Lado" />
                <span><Tag tone="yellow">Brevemente</Tag></span>
            </div>
            <div class="loja-product-body">
                <div class="loja-product-head">
                    <strong>Meias Lado a Lado</strong>
                    <span>8€</span>
                </div>
                <p>
                    O amor não é descartável... e as tuas meias também não.
                </p>
                <div class="cta">
                    <Button variant="primary" size="sm">Pré-reserva</Button>
                </div>
            </div>
        </Card>

        <Card padding="0">
            <div class="loja-product-img" style="background:var(&#45;&#45;theme-brown);">
                <img src="/img/merch/jogo-perguntas.png" alt="Jogo de perguntas para namorados" />
                <span><Tag tone="yellow">Brevemente</Tag></span>
            </div>
            <div class="loja-product-body">
                <div class="loja-product-head">
                    <strong>Jogo para namorados</strong>
                    <span>22€</span>
                </div>
                <p>
                    Estás a namorar? Calma! Não te cases antes de fazeres estas 100 perguntas!
                </p>
                <div class="cta">
                    <Button variant="primary" size="sm">Pré-reserva</Button>
                </div>
            </div>
        </Card>
    </div>
</section>
-->

<!-- ====== APOIAR ====== -->
<section id="apoiar" class="section">
    <SectionHeading eyebrow="Apoiar">Faz parte de quem torna isto possível</SectionHeading>
    <p class="section-desc">
        O Lado a Lado vive do contributo de quem se identifica com esta missão.
    </p>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-7 mt-14">
        <Card padding="40px 38px 42px">
            <div class="apoiar-card">
                <div class="flex">
                    <Tag tone="red">Doar</Tag>
                </div>
                <h3 class="font-display">Apoia com um donativo</h3>
                <p class="font-ui">
                    Cada contributo ajuda a levar campos, cursos e eventos a mais jovens por todo o
                    país. Qualquer valor faz diferença.
                </p>
                <div class="mt-auto pt-3">
                    <Button variant="primary" size="md">Quero doar</Button>
                </div>
            </div>
        </Card>

        <Card padding="40px 38px 42px">
            <div class="apoiar-card">
                <div class="flex">
                    <Tag tone="yellow">Voluntariado</Tag>
                </div>
                <h3 class="font-display">Junta-te como voluntário</h3>
                <p class="font-ui">
                    Dá o teu tempo e talento a montar eventos, acompanhar jovens, concretizar ideias
                    e manter esta missão viva. Trabalhamos lado a lado, na prática.
                </p>
                <div class="mt-auto pt-3">
                    <Button variant="outline" size="md">Quero ser voluntário</Button>
                </div>
            </div>
        </Card>
    </div>
</section>

<!-- ====== NEWSLETTER ====== -->
<section id="newsletter" class="newsletter">
    <div class="newsletter-inner">
        <span class="eyebrow text-[var(--theme-brown)]">Junta-te</span>
        <h2 class="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] text-[var(--theme-brown)] my-3.5">Não
            fiques de fora</h2>
        <p class="font-ui text-[1.05rem]/[1.6] text-[var(--theme-brown)] mb-[30px]">
            Recebe novidades, eventos e conteúdos para amar melhor – direto no teu email.
        </p>
        <Button variant="deep" size="lg">Quero entrar</Button>
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
    <span>Que a tua história termine com &ldquo;... e viveram</span>
    <img
            src="/img/logo-name-black.svg"
            alt="Lado a Lado"
            class="h-[27px] w-auto translate-y-[0.06em]"
    />
    <span>para sempre.&rdquo;</span>
</FeatureBand>
