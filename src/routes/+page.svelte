<script lang="ts">
	let urls = [
		"https://www.instagram.com/p/C56qvfXrgOt/",
		"https://www.instagram.com/ladoaladopt/p/DRArNGgDj6Z/",
		"https://www.instagram.com/ladoaladopt/reel/DNodamaM1Ha/",
		"https://www.instagram.com/ladoaladopt/reel/DNl0_GxgAIX/",
		"https://www.instagram.com/ladoaladopt/reel/DNjEyhYAeYg/",
		"https://www.instagram.com/ladoaladopt/reel/DNgrMfogjSK/",
	] as const;
	const parceiros = [
		["/img/main/ucp.svg", 4],
		["/img/main/aese.svg", 3],
		["/img/main/fertility-care.svg", 10],
		["/img/main/vale-estevao.png", 10],
		["/img/main/bolsas.jpg", 4],
	] as const;
</script>

<!-- Hero Section -->
<section
	class="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden"
>
	<div class="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
		<img
			src="/img/logo-name-yellow.svg"
			alt="Lado a Lado"
			class="h-6 md:h-10 w-auto brightness-0"
		/>
	</div>

	<div class="text-center max-w-4xl mx-auto">
		<h1
			class="rubik color-brown text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
		>
			Foste feito<br />para <span class="color-red">amar.</span>
		</h1>

		<p
			class="rubik color-red text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed"
		>
			inspirar jovens a descobrir o sentido da vida no amor.
		</p>

		<button class="reddy-button"> Descobre Como </button>
	</div>

	<div
		id="stats"
		class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8"
	>
		<div class="p-6">
			<h3 class="rubik color-red text-3xl font-bold mb-2">3500+</h3>
			<p class="mono color-brown text-lg font-semibold">
				Jovens impactados
			</p>
		</div>
		<div class="p-6">
			<h3 class="rubik color-red text-3xl font-bold mb-2">40+</h3>
			<p class="mono color-brown text-lg font-semibold">
				Eventos realizados
			</p>
		</div>
		<div class="p-6">
			<h3 class="rubik color-red text-3xl font-bold mb-2">35+</h3>
			<p class="mono color-brown text-lg font-semibold">Voluntários</p>
		</div>
	</div>
</section>

<!-- Navigation Buttons (Sticky) -->
<nav class="sticky top-0 bg-yellow shadow-md z-30">
	<div class="flex justify-center items-center gap-4 py-4 flex-wrap px-4">
		<button class="reddy-button">Eventos</button>
		<button class="reddy-button">Podcasts</button>
		<button class="reddy-button">Cursos</button>
		<button class="reddy-button">Voluntariado</button>
		<button class="reddy-button">Doações</button>
	</div>
</nav>

<!-- Live Conferences Section -->
<section class="p-16 px-4 bg-white">
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
			<div
				class="border-2 border-[var(--theme-brown)] rounded-lg p-6 transition-shadow duration-150 hover:shadow-lg"
			>
				<h3 class="rubik color-brown font-bold text-xl mb-2">
					30 de Setembro
				</h3>
				<p class="rubik color-brown text-lg">Porto</p>
				<p class="rubik color-red text-base mt-2">Feitos para amar</p>
			</div>
			<div
				class="border-2 border-[var(--theme-brown)] rounded-lg p-6 transition-shadow duration-150 hover:shadow-lg"
			>
				<h3 class="rubik color-brown font-bold text-xl mb-2">
					19 de Junho
				</h3>
				<p class="rubik color-brown text-lg">Lisboa</p>
				<p class="rubik color-red text-base mt-2">Feitos para amar</p>
			</div>
		</div>

		<div>
			<button class="reddy-button">Inscreve-te aqui!</button>
		</div>
	</div>
</section>

<!-- Podcasts Section -->
<section class="p-16 px-4 bg-white">
	<div class="max-w-[64rem] mx-auto">
		<div class="text-right mb-12">
			<h2 class="rubik color-brown font-bold mb-4 text-5xl">Podcast</h2>
			<p class="rubik color-red text-lg font-light">
				com casais convidados e especialistas para responder às tuas
				perguntas!
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

<!-- Courses Section -->
<section class="p-16 px-4 bg-yellow">
	<div class="max-w-[64rem] mx-auto">
		<div class="text-center mb-12">
			<h2
				class="fruits-delight color-brown font-bold mb-4 text-4xl md:text-6xl"
			>
				Cursos para Jovens
			</h2>
			<p class="rubik color-red text-lg font-light">
				para trazer ao de cima todo o potencial do corpo e da mente!
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
			<div
				class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
			>
				<h3 class="rubik color-brown font-bold text-2xl mb-4">
					Próximos Cursos
				</h3>
				<ul class="space-y-3 rubik color-brown">
					<li class="flex items-center gap-2">
						<span class="color-red font-bold">•</span>
						Curso de Amor e Compromisso
					</li>
					<li class="flex items-center gap-2">
						<span class="color-red font-bold">•</span>
						Formação em Liderança Cristã
					</li>
					<li class="flex items-center gap-2">
						<span class="color-red font-bold">•</span>
						Workshop: Construindo Relacionamentos Saudáveis
					</li>
				</ul>
			</div>

			<div
				class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
			>
				<h3 class="rubik color-brown font-bold text-2xl mb-4">
					Voluntariado
				</h3>
				<p class="rubik color-brown text-base font-light mb-6">
					Junta-te ao movimento e ajuda-nos a impactar a vida de
					milhares de jovens através de campos, eventos e ações
					comunitárias.
				</p>
				<button class="btn-base px-6 py-2 w-full"
					>Torna-te Voluntário</button
				>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action Section -->
<section class="p-16 px-4 text-white">
	<div class="max-w-[64rem] mx-auto">
		<h2 class="rubik color-brown text-4xl font-bold mb-6">
			<p>Junta-te ao Movimento.</p>
			<p>
				Vamos impactar <span class="color-red">lado a lado</span>.
			</p>
		</h2>
		<p class="color-red">
			<span class="font-bold"
				>temos um sonho: que todos os jovens descubram que foram feitos
				para amar!</span
			> <br /><br />
			junta-te a nós, vamos a espalhar a mensagem de que é possível amar a
			vida toda, com fidelidade e generosidade.<br /><br />
			torna-te impulsionador ou voluntário!
		</p>
		<div class="mt-8 flex gap-8">
			<button class="reddy-button"> Impulsiona </button>
			<button class="reddy-button"> Candidata-te </button>
		</div>
	</div>
</section>

<!-- partners section -->
<section class="flex flex-col items-center mb-16">
	<h3 class="rubik color-brown text-lg font-bold">Parceiros</h3>
	<div class="flex justify-center items-center gap-16 flex-wrap p-8">
		{#each parceiros as [parceiro, scale]}
			<img
				src={parceiro}
				alt="Parceiro Logo"
				class="w-auto"
				style="height: {scale}rem"
			/>
		{/each}
	</div>
</section>

<!-- Instagram Section -->
<section>
	<div class="max-w-[64rem] mx-auto">
		<div class="text-center mb-12">
			<h2 class="rubik color-brown font-bold mb-4 text-lg md:text-xl">
				Não deixes escapar nada...
			</h2>
		</div>

		<div
			class="flex gap-4 overflow-x-auto py-4 md:grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:overflow-visible md:gap-8"
		>
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

<style lang="scss">
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
	}

	.podcast-icon {
		@apply flex justify-center items-center;
		filter: hue-rotate(286deg) saturate(54%) brightness(32%);
	}
</style>
