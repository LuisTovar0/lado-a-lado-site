<footer class="lal-footer">
    <div class="lal-footer__inner flex-col items-center text-center gap-7 md:flex-row md:items-center md:text-left md:gap-10">
        <div class="lal-footer__brand">
            <img src="/img/logo-name-white.svg" alt="Lado a Lado" class="lal-footer__logo" />
        </div>

        <nav class="lal-footer__nav justify-center md:justify-start">
            <a href="#sobre">Sobre</a>
            <a href="#fazemos">O que fazemos</a>
            <a href="#apoiar">Apoiar</a>
            <!--<a href="#loja">Loja</a>-->
        </nav>

        <div class="lal-footer__social">
            <a href="https://www.instagram.com/ladoaladopt/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="1.8"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                    <circle cx="12" cy="12" r="4"></circle>
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"></circle>
                </svg>
            </a>
            <a href="https://www.youtube.com/@lado_a_lado" target="_blank" rel="noopener" aria-label="YouTube">
                <svg width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="1.8"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.3 12 31 31 0 0 0 22 8.2Z"></path>
                    <path d="M10 9.2v5.6l5-2.8-5-2.8Z" fill="currentColor" stroke="none"></path>
                </svg>
            </a>
            <a href="https://open.spotify.com/show/79y8yNDSivKHovVU28g4oI"
               target="_blank"
               rel="noopener"
               aria-label="Spotify">
                <svg width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="1.6"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M7 9.2c3-.8 6.4-.5 9 1"></path>
                    <path d="M7.5 12.4c2.5-.6 5.3-.3 7.4 1"></path>
                    <path d="M8 15.4c2-.5 4-.3 5.6.7"></path>
                </svg>
            </a>
            <a href="mailto:geral@ladoalado.info" aria-label="Email">
                <svg width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="1.8"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="m3.5 7 8.5 6 8.5-6"></path>
                </svg>
            </a>
        </div>
    </div>

    <div class="lal-footer__bottom">
        <span>&copy; 2026 Lado a Lado</span>
        <span>Foste feito para amar</span>
    </div>
</footer>

<style lang="scss">
    .lal-footer {
        background: var(--theme-brown);
        color: var(--theme-cream);
    }

    .lal-footer__inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 36px var(--container-pad) 28px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
    }

    .lal-footer__logo {
        height: 36px;
        width: auto;
    }

    .lal-footer__nav {
        display: flex;
        flex-wrap: wrap;
        gap: 14px 32px;
        font-family: 'OverpassMono', monospace;
        font-weight: 400;
        font-size: 0.8rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;

        a {
            text-decoration: none;
            color: var(--theme-cream);
            opacity: 0.9;
            transition: opacity 140ms;

            &:hover {
                opacity: 1;
            }
        }
    }

    .lal-footer__social {
        display: flex;
        align-items: center;
        gap: 14px;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 1px solid rgba(252, 249, 233, 0.3);
            color: var(--theme-cream);
            transition: background 200ms, border-color 200ms;

            &:hover {
                background: rgba(252, 249, 233, 0.1);
                border-color: rgba(252, 249, 233, 0.5);
            }
        }
    }

    .lal-footer__bottom {
        border-top: 1px solid rgba(252, 249, 233, 0.18);
        max-width: 1200px;
        margin: 0 auto;
        padding: 22px var(--container-pad);
        display: flex;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        font-family: 'OverpassMono', monospace;
        font-size: 0.78rem;
        letter-spacing: 0.08em;
        opacity: 0.8;
    }
</style>
