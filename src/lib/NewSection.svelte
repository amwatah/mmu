<script lang="ts">
	import NewsCard from './NewsCard.svelte';
	import { collection, getDocs, query, where } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { db } from './firebase/config';
import FundCard from './FundCard.svelte';
	import { userDetails } from './stores/globals';

	let fundraises: any[] = [];
	let annoucements: any[] = [];
	function getFundraisers() {
		getDocs(
			query(collection(db, 'fundraisers'), where('shareTo', 'array-contains', $userDetails?.course))
		).then((docsSnap) => {
			if (!docsSnap.empty) {
				docsSnap.forEach((doc) => {
					fundraises = [...fundraises, {...doc.data(), docId: doc.id}];
				});
			}
		});
	}
	function getAnnouncements() {
		getDocs(
			query(
				collection(db, 'announcements'),
				where('shareTo', 'array-contains', $userDetails?.course)
			)
		).then((docsSnap) => {
			if (!docsSnap.empty) {
				docsSnap.forEach((doc) => {
					annoucements = [...annoucements, {...doc.data(), docId: doc.id}];
				});
			}
		});
	}
	onMount(() => {
		getFundraisers();
        getAnnouncements()
	});
</script>

<section>
	 {#if  fundraises.length !== 0 || annoucements.length !== 0 }
	   <main class="h-screen flex flex-col ">
	    <section class="fundraisers flex-1 ">
		
			<div class=" carousel w-full m-1 rounded-md ">
				{#each  fundraises as  fundraiser }
					 <div  class=" carousel-item w-full  ">
                         <FundCard fundraiser={ fundraiser} on:likeAdded={getFundraisers} /> 
					 </div>
				{/each}

			</div>
		</section>
		<section class="news flex-[3] overflow-y-scroll ">
			 {#each  annoucements  as announcement }
				  <section class="announcement">
					   <NewsCard announcement={ announcement}/>
				  </section>
			 {:else}
				 <p class="">NO NEWS IN YOUR CATEGORY CHECK AGAIN LATER</p>
			 {/each}
		</section>
	</main>
	 {:else}
	 <p class="text-error">NO NEWS IN YOUR CATEGORY CHECK AGAIN LATER</p>
	 {/if}
</section>
