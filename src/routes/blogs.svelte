<script lang="ts">
	import BlogCard from '$lib/BlogCard.svelte';
	import { db } from '$lib/firebase/config';
	import { loggedIn, userDetails } from '$lib/stores/globals';
	import { collection, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let blogs: any[] = [];
	function getBlogs() {
		getDocs(collection(db, 'blogs')).then((docs) => {
			docs.forEach((doc) => {
				blogs = [...blogs, doc.data()];
			});
		});
	}

	onMount(() => {
		getBlogs();
	});
</script>

<div class="page pt-[5vh]  pb-[10vh]">
    {#if  $loggedIn   }
     <section class="blogs">
		{#each blogs as blog}
			<BlogCard {blog} />
		{:else}
			<p class=" text-error">NO BLOGS</p>
		{/each}
		
	 </section>
    {:else}
          <section   class=" w-screen   h-screen flex  flex-col items-center  justify-center  gap-2">
               <p class="text-error">UNAUTHORIZED</p>
               <a href="/" class="btn btn-outline btn-primary">LOGIN</a>
          </section>
    {/if}
	


</div>
