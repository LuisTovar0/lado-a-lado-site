<script>
</script>

<style lang="scss">
#stats > div {
    padding: 1.5rem;;

    h3 {
        font-family: "Rubiks", sans-serif;
        color: var(--theme-red);
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    p {
        font-family: "Open Sans", sans-serif;
        color: var(--theme-brown);
        font-size: 1.125rem;
        font-weight: 600;
    }
}

nav button {
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
}

.sticky { z-index: 30; }

/* Reusable CTA button that matches the nav buttons' visual style */
.cta-button {
	font-family: "OverpassMono", monospace;
	text-transform: uppercase;
	color: var(--theme-red);
	border: 2px solid var(--theme-red);
	background: transparent;
	padding: 0.5rem 1.25rem;
	border-radius: 9999px;
	font-weight: 600;
	display: inline-block;
}
.cta-button:hover {
	color: var(--theme-yellow);
	background-color: var(--theme-red);
}
.cta-button:active { box-shadow: inset 0 0 15px -5px var(--theme-black); }

/* Shared layout utilities to reduce duplication */

.section { padding: 4rem 1rem; }
.section--white { background: var(--theme-white); }
.section--yellow { background: var(--theme-yellow); }
.section--brown { background: var(--theme-brown); color: white; }

.container { max-width: 64rem; margin-left: auto; margin-right: auto; }
.section-header { text-align: center; margin-bottom: 3rem; }
.section-header--left { text-align: center; }
.section-header--right { text-align: center; }
@media (min-width: 768px) {
	.section-header--left { text-align: left; }
	.section-header--right { text-align: right; }
}

/* Align whole section content to a side on medium+ screens */
.section--align-left {
	.container { text-align: center; }
}
@media (min-width: 768px) {
	.section--align-left { .container { text-align: left; } .grid { justify-items: start; } }
}

.section--align-right {
	.container { text-align: center; }
}
@media (min-width: 768px) {
	.section--align-right { .container { text-align: right; } .grid { justify-items: end; } }
}
.section-title {
	font-family: "FruitsDelight", fantasy;
	color: var(--theme-brown);
	font-weight: 700;
	margin-bottom: 1rem;
	font-size: 2.5rem;
}
@media (min-width: 768px) {
	.section-title { font-size: 3.5rem; }
}

.card {
	border: 2px solid var(--theme-brown);
	border-radius: 0.5rem;
	padding: 1.5rem;
	transition: box-shadow .15s ease;
}
.card:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.08); }

.lead {
	font-family: "Rubiks", sans-serif;
	color: var(--theme-red);
	font-size: 1.125rem;
	font-weight: 300;
}
</style>

<!-- Hero Section -->
<section class="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
	<div class="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
		<img src="/img/logo-name-yellow.svg" alt="Lado a Lado" class="h-6 md:h-10 w-auto brightness-0">
	</div>

	<div class="text-center max-w-4xl mx-auto">
		<h1 class="rubik color-brown text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
			Foste feito<br>para <span class="color-red">amar.</span>
		</h1>

		<p class="rubik color-red text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
			inspirar jovens a descobrir o sentido da vida no amor.
		</p>

		<button class="cta-button px-8 py-3 rounded-full">
			Descobre Como
		</button>
	</div>

    <div id="stats" class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
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
<nav class="sticky top-0 bg-yellow shadow-md">
	<div class="flex justify-center items-center gap-4 py-4 flex-wrap px-4">
	<button>Eventos</button>
	<button>Podcasts</button>
	<button>Cursos</button>
	<button>Voluntariado</button>
	<button>Doações</button>
  </div>
</nav>

<!-- Live Conferences Section -->
<section class="section section--white section--align-left">
	<div class="container">
		<div class="section-header section-header--left">
			<h2 class="section-title fruits-delight">Eventos ao vivo</h2>
			<p class="lead">
				que inspiram a descobrir o porquê de estarmos vivos!
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
			<div class="card">
				<h3 class="rubik color-brown font-bold text-xl mb-2">30 de Setembro</h3>
				<p class="rubik color-brown text-lg">Porto</p>
				<p class="rubik color-red text-base mt-2">Feitos para amar</p>
			</div>
			<div class="card">
				<h3 class="rubik color-brown font-bold text-xl mb-2">19 de Junho</h3>
				<p class="rubik color-brown text-lg">Lisboa</p>
				<p class="rubik color-red text-base mt-2">Feitos para amar</p>
			</div>
		</div>

		<div>
			<button class="cta-button px-8 py-3 rounded-full">Inscreve-te aqui!</button>
		</div>
	</div>
</section>

<!-- Podcasts Section -->
<section class="section section--white section--align-right">
	<div class="container">
		<div class="section-header section-header--right">
			<h2 class="section-title fruits-delight">Podcasts</h2>
			<p class="lead">sobre o namoro, casamento e família!</p>
		</div>

		<div>
			<button class="cta-button px-8 py-3 rounded-full">Ouvir Todos os Episódios</button>
		</div>
	</div>
</section>

<!-- Courses Section -->
<section class="section section--yellow">
	<div class="container">
		<div class="section-header">
			<h2 class="section-title fruits-delight">Cursos para Jovens</h2>
			<p class="lead">para trazer ao de cima todo o potencial do corpo e da mente!</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
			<div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
				<h3 class="rubik color-brown font-bold text-2xl mb-4">Próximos Cursos</h3>
				<ul class="space-y-3 rubik color-brown">
					<li class="flex items-center gap-2">
						<span class="text-red font-bold">•</span>
						Curso de Amor e Compromisso
					</li>
					<li class="flex items-center gap-2">
						<span class="text-red font-bold">•</span>
						Formação em Liderança Cristã
					</li>
					<li class="flex items-center gap-2">
						<span class="text-red font-bold">•</span>
						Workshop: Construindo Relacionamentos Saudáveis
					</li>
				</ul>
			</div>

			<div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
				<h3 class="rubik color-brown font-bold text-2xl mb-4">Voluntariado</h3>
				<p class="rubik color-brown text-base font-light mb-6">
					Junta-te ao movimento e ajuda-nos a impactar a vida de milhares de jovens através de campos, eventos e ações comunitárias.
				</p>
				<button class="cta-button px-6 py-2 rounded-full w-full">Torna-te Voluntário</button>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action Section -->
<section class="section section--brown">
	<div class="container text-center">
		<h2 class="fruits-delight text-5xl md:text-6xl font-bold mb-6">Junta-te ao Movimento</h2>
		<p class="rubik text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8">
			Vamos impactar lado a lado, espalhando a mensagem de que é possível amar a vida toda, com fidelidade e generosidade.
		</p>
		<div class="flex flex-col md:flex-row gap-4 justify-center">
			<button class="cta-button px-8 py-3 rounded-full">Torna-te Impulsionador</button>
			<button class="cta-button px-8 py-3 rounded-full">Fazer Doação</button>
		</div>
	</div>
</section>
