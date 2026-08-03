<script>
</script>

<section class="md:gap-4 md:py-12 flex flex-col items-center gap-4 py-10">
    <h1 class="color-red mono">HorÃ¡rio</h1>
    <h2 class="fruits-delight text-center text-3xl md:text-4xl xl:text-5xl">Que programa temos para oferecer?</h2>
    <div class="horÃ¡rio flex flex-col w-11/12 max-w-[900px]">
        <div class="color-red mono !items-end">
            <span class="text-lg font-semibold w-[70%]">SÃBADO, 6 ABRIL</span>
            <div class="flex flex-col items-end">
                <span>Lisboa</span>
                <span class="text-right">Universidade CatÃ³lica</span>
            </div>
        </div>
        <hr class="!border-t-2 !border-[var(--theme-red)]" />
        <div class="momento">
            <div>
                <span>18h00</span>
                <span>Check-in</span>
            </div>
        </div>
        <hr />
        <div class="momento">
            <div>
                <span>18h30</span>
                <span>Abertura</span>
            </div>
        </div>
        <hr />
        <div class="momento">
            <div>
                <span></span>
                <span>O mundo em que vivemos</span>
                <div class="hidden md:block"></div>
                <span>Francisco Vilhena da Cunha</span>
            </div>
            <div>
                <div>
                    <img src="/img/fpa/fvc.png" alt="Francisco Vilhena da Cunha" />
                </div>
            </div>
        </div>
        <hr />
        <div class="momento">
            <div>
                <span></span>
                <span>Para que fui feito?</span>
                <div class="hidden md:block"></div>
                <span>Pe. Bernardo Aranha</span>
            </div>
            <div>
                <div>
                    <img src="/img/fpa/pba.png" alt="Pe. Bernardo Aranha" class="relative top-1 right-1 scale-110" />
                </div>
            </div>
        </div>
        <hr />
        <div class="momento">
            <div>
                <span></span>
                <span>A beleza da complementaridade</span>
                <div class="hidden md:block"></div>
                <span>Javier CalderÃ³n e Alexandra Chumbo</span>
            </div>
            <div class="flex">
                <div class="over">
                    <img src="/img/fpa/javi.png" alt="Javier CalderÃ³n" class="javi" />
                </div>
                <div>
                    <img src="/img/fpa/alex.png" alt="Alexandra Chumbo" />
                </div>
            </div>
        </div>
        <hr />
        <div class="momento !my-4">
            <div>
                <span></span>
                <span>Coffee break (30 min)</span>
            </div>
            <span class="text-3xl">â˜•ï¸</span>
        </div>
        <hr />
        <div class="momento">
            <div>
                <span></span>
                <span>Do encantamento inicial ao amor</span>
                <div class="hidden md:block"></div>
                <span>Rodolfo Nona</span>
            </div>
            <div>
                <div>
                    <img class="relative right-3 top-1 scale-110" src="/img/fpa/rodolfo.png" alt="Rodolfo Nona" />
                </div>
            </div>
        </div>
        <hr />
        <div class="momento">
            <div>
                <span></span>
                <span>Amar-te todos os dias da minha vida</span>
                <div class="hidden md:block"></div>
                <span>GraÃ§a e Miguel VarÃ£o</span>
            </div>
            <div>
                <div>
                    <img class="relative left-1/2 -translate-x-1/2 scale-110 top-1" src="/img/fpa/mig.png"
                         alt="GraÃ§a e Miguel VarÃ£o" />
                </div>
            </div>
        </div>
        <hr />
        <div class="momento">
            <div>
                <span></span>
                <span>Fui ao fundo. E agora?</span>
                <div class="hidden md:block"></div>
                <span>Vasco Almeida Ribeiro</span>
            </div>
            <div>
                <div>
                    <img class="relative right-2" src="/img/fpa/var.png" alt="Vasco Almeida Ribeiro" />
                </div>
            </div>
        </div>
        <hr />
        <div class="momento">
            <div>
                <span></span>
                <span>"Ama e faz o que quiseres"</span>
                <div class="hidden md:block"></div>
                <span>FÃ¡tima e Henrique Fonseca</span>
            </div>
            <div>
                <div>
                    <img class="relative scale-[1.4] bottom-4 right-1" src="/img/fpa/fati.png"
                         alt="FÃ¡tima e Henrique Fonseca" />
                </div>
            </div>
        </div>
        <hr />
    </div>
</section>

<style lang="scss">
    .horÃ¡rio {
        & > div {
            @apply flex items-center justify-between my-2;
        }

        hr {
            @apply border-t border-black;
        }

        .momento {
            @apply gap-4;

            & > *:nth-child(1) {
                @apply shrink grid gap-2 grid-cols-1 md:grid-cols-[80px_1fr] items-baseline;

                & > span {
                    @apply my-[3px] md:my-0;
                }

                & > span:nth-child(1) {
                    @apply font-semibold;
                    font-family: OverpassMono, monospace;
                    color: var(--theme-red);

                    @apply md:font-bold md:text-black;
                }

                & > span:nth-child(2) {
                    @apply font-bold;
                }
            }

            & > *:nth-child(2) {
                & > div {
                    @apply overflow-hidden;
                    --dimention: 80px;
                    height: var(--dimention);
                    width: var(--dimention);
                    border-radius: 99999px;
                    background-color: var(--theme-red);
                }
            }
        }

        img {
            object-fit: contain;
            height: var(--dimention);
            width: var(--dimention);
        }

        .over {
            @apply relative -right-5;
        }

        .javi {
            clip-path: inset(0 10px 0 0);
        }
    }
</style>
