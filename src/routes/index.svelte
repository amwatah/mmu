<script lang="ts">
	import Login from '$lib/Login.svelte';
	import SiginUp from '$lib/SiginUp.svelte';

	let activeAccount = true
    const toggleAccount = ()=> activeAccount = !activeAccount
</script>

<div class=" page flex flex-col items-center text-center">
	<div class="intro-text">
		<h1 class="text-xl sm:text-4xl">MULTIMEDIA STUDENTS HUB</h1>
		<h2>The comrades centre</h2>
	</div>
	<section class="animation h-[25vh]">
		<script
			src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
		<lottie-player
			src="https://assets2.lottiefiles.com/private_files/lf30_cts81mpw.json"
			background="transparent"
			speed="1"
			loop
			autoplay
		/>

		{#if  activeAccount}
			<Login  hasAccount={ toggleAccount}/>
		{:else}
			<SiginUp hasAccount={ toggleAccount} />
		{/if}
	</section>
</div>
