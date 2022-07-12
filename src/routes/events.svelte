<script lang="ts">
	import EventsSection from '$lib/EventsSection.svelte';
	import MeetingSection from '$lib/MeetingSection.svelte';

	import { loggedIn, userDetails } from '$lib/stores/globals';
</script>

<div class="page pb-[10vh] w-screen min-h-screen ">
	{#if $loggedIn}
		{#if $userDetails?.user === 'student'}
			<section class="student">
				<MeetingSection />
			</section>
			<section class="student">
				<EventsSection />
			</section>
		{:else}
			<section class="tutor w-screen h-screen flex flex-col items-center justify-center">
				<p class="text-error">Tutors can only create content for students</p>
			</section>
		{/if}
	{:else}
		<section class=" w-screen   h-screen flex  flex-col items-center  justify-center  gap-2">
			<p class="text-error">UNAUTHORIZED</p>
			<a href="/" class="btn btn-outline btn-primary">LOGIN</a>
		</section>
	{/if}
</div>
