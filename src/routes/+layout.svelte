<script>
	import Hero from '../lib/components/hero.svelte';
	import '../styles.css';
	let showHero = true;
</script>

<svelte:head>
	<title>GhanaSoft</title>
</svelte:head>
<div class="bg-herobg text-textcolor">
	<svg
		class="absolute right-[0px] h-auto w-[200px] sm:h-auto sm:w-[350px] top-[100px]"
		width="529"
		height="739"
		viewBox="0 0 529 739"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle
			cx="369.5"
			cy="369.5"
			r="338.5"
			stroke="#4FF814"
			stroke-opacity="0.04"
			stroke-width="62"
		/>
	</svg>
	<!-- Small ellipse -->
	<svg
		class="absolute left-0 top-[200px] h-[10%] w-auto md:top-[390px] md:h-[20%]"
		width="316"
		height="463"
		viewBox="0 0 316 463"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle
			cx="84.5"
			cy="231.5"
			r="200.5"
			stroke="#4FF814"
			stroke-opacity="0.07"
			stroke-width="62"
		/>
	</svg>
	<div id="container" class=" max-w-6xl mx-auto md:px-9 px-4">
		<section class=" flex justify-between align-middle items-center sm:py-7 pt-6">
			<div id="logo" class="sm:text-[20px] text-[18px] font-semibold">
				<a href="/"><span id="logo-span" class="text-maingreen">Ghana</span>Soft</a>
			</div>
			<nav class="sm:block hidden">
				<ul class="flex gap-6">
					<li>
						<a
							href="notyet"
							class="text-[16px] font-semibold hover:border-b-2 hover:border-textcolor transition-all duration-100"
							>Home</a
						>
					</li>
					<li>
						<a
							href="notyet"
							class="text-[16px] font-semibold hover:border-b-2 hover:border-textcolor transition-all duration-100"
							>Cases</a
						>
					</li>
					<li>
						<a
							href="notyet"
							class="text-[16px] font-semibold hover:border-b-2 hover:border-textcolor transition-all duration-100"
							>Blog</a
						>
					</li>
					<li>
						<a
							href="notyet"
							class="text-[16px] font-semibold hover:border-b-2 hover:border-textcolor transition-all duration-100"
							>About</a
						>
					</li>
					<li>
						<a
							href="notyet"
							class="text-[16px] font-semibold hover:border-b-2 hover:border-textcolor transition-all duration-100"
							>Contact</a
						>
					</li>
				</ul>
			</nav>
			<div id="contact-btn" class="">
				<a
					href="#contact"
					class="text-maingreen px-[20px] py-[5px] border-maingreen border-[1px] rounded-[0.3125rem] sm:text-[16px] font-extrabold text-[14px] sm:hover:bg-maingreen sm:hover:text-herobg sm:transition-all sm:duration-300"
					>Contact</a
				>
			</div>
		</section>
		{#if showHero}
			<Hero />
		{/if}
	</div>
</div>

<slot />
