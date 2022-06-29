<script lang="ts">
	import EventCard from '$lib/EventCard.svelte';
	import { db } from '$lib/firebase/config';
import { loggedIn } from '$lib/stores/globals';

	import { collection, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let events: any[] = [];

	function getEvents() {
		getDocs(collection(db, 'events')).then((docs) => {
			if (!docs.empty) {
				docs.forEach((doc) => {
					events = [...events, doc.data()];
				});
			} else {
				alert('no events at  the moment !');
			}
		});
	}

	onMount(() => {
		getEvents();
	});
</script>

<div class="page">
     {#if $loggedIn }
     <h1>UPCOMING EVENTS</h1>
     <p>{events.length}</p>
 
     {#each events as event}
         <EventCard event={event} />
     {:else}
         <p class=" text-error">There are no events currently ! try to add some</p>
     {/each}
     {:else}
     <section   class=" w-screen   h-screen flex  flex-col items-center  justify-center  gap-2">
        <p class="text-error">UNAUTHORIZED</p>
        <a href="/" class="btn btn-outline btn-primary">LOGIN</a>
   </section>
     {/if}

</div>
