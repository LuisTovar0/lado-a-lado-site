<script lang=ts>
  import {derived, writable} from "svelte/store";
  import {onDestroy, onMount} from "svelte";
  import Section1Landing from "./Section1Landing.svelte";
  import Section2About from "./Section2About.svelte";
  import Section3Horario from "./Section3Horario.svelte";

  const scrollHeight = writable(0);

  const opacity = derived(scrollHeight, ($scroll) => {
    //todo
  });

  const unsubscribe = scrollHeight.subscribe(scroll => {
    //todo
    // const headerElem = document.querySelector('header');
    // if (!headerElem)
    //   return;
    // headerElem.style.opacity = String(scroll / 10);
  });

  const updateScrollHeight = () => {
    const maxHeight = document.body.scrollHeight - window.innerHeight;
    scrollHeight.set((window.scrollY * 100) / maxHeight);
  };
  onMount(() => updateScrollHeight());
  onDestroy(unsubscribe);
</script>

<svelte:window on:scroll={updateScrollHeight}/>

<header class="fixed z-10 w-lvw flex" style="background-color: rgba(255,229,125,{$scrollHeight/30})">
    <a class="logo block m-7 w-36" href="/"><img class="w-full" src="/img/logo-name-black.svg" alt="Lado a Lado"/></a>
</header>

<div class="header-buttons">
    <!--    <div class="mono font-semibold absolute left-1/2 bottom-[10%] -translate-x-1/2 flex gap-14 text-lg">-->
    <!--        <a href="#sobre">Sobre</a>-->
    <!--        <a href="#oradores">Oradores</a>-->
    <!--        <a href="#horário">Horário</a>-->
    <!--        <a href="#reserva">Reserva</a>-->
    <!--    </div>-->
</div>

<Section1Landing/>

<Section2About/>

<section class="bg-[var(--theme-yellow)] flex justify-center items-center px-4 py-12">
    <img class="w-full md:w-1/2 md:mr-44" src="/img/lado-a-lado-frase.svg"
         alt="E viveram lado a lado para sempre"/>
</section>

<Section3Horario/>

<section class="flex flex-row bg-[var(--theme-yellow)] h-[140px] md:h-[200px]">
    <div class="md:translate-x-[65%]">
        <img alt="maos-em-concha" src="/img/drawings/maos-em-concha.svg"/>
    </div>
    <div class="flex flex-col items-center mr-1 w-9/12 md:pt-6 md:pb-3">
        <h1 class="color-red mono text-center py-3 font-bold">INSCRIÇÃO</h1>
        <h2 class="fruits-delight text-center text-xl md:text-2xl xl:text-3xl pb-5 md:pb-8">Feitos para amar</h2>
    </div>
</section>
