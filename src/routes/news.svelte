<script lang="ts">
	import NewSection from '$lib/NewSection.svelte';
	import { loggedIn, userDetails } from '$lib/stores/globals';
	console.log($userDetails);
</script>

<div class="page">
	{#if $loggedIn}
		{#if $userDetails?.user === 'student'}
			<section class="student">
				<NewSection />
			</section>
		{:else}
			<section class="tutor w-screen h-screen flex flex-col items-center justify-center">
			      <p class=" text-error">Tutor can only veiw content </p>
			</section>
		{/if}
	{:else}
		<section class=" w-screen   h-screen flex  flex-col items-center  justify-center  gap-2">
			<p class="text-error">UNAUTHORIZED</p>
			<a href="/" class="btn btn-outline btn-primary">LOGIN</a>
		</section>
	{/if}
</div>
