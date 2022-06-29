<script>
	import { loggedIn } from '$lib/stores/globals';
</script>

<div class="page">
	{#if $loggedIn}
		<section class="announements">
            announcements 
        </section>
        <section class="meetings">
             meetings
        </section>
        <section class="events">
               events
        </section>
        <div class="top-blogs">
            blogs 
        </div>
	{:else}
		<section class=" w-screen   h-screen flex  flex-col items-center  justify-center  gap-2">
			<p class="text-error">UNAUTHORIZED</p>
			<a href="/" class="btn btn-outline btn-primary">LOGIN</a>
		</section>
	{/if}
</div>
