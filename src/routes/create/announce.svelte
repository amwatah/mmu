<script lang="ts">
	import Cast from '$lib/Cast.svelte';
import { db } from '$lib/firebase/config';
	import { loggedIn, userDetails } from '$lib/stores/globals';
	import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


	let announcementTitle = '';
	let announcementDescribion = '';
	let shareTo :any[] = []

	

	async function submitAnouncement() {
		await addDoc(collection(db, 'announcements'), {
			title: announcementTitle.toUpperCase(),
			describtion: announcementDescribion,
			createdBy: $userDetails,
			upvotes: 0,
			created: serverTimestamp(),
			shareTo : shareTo
		}).then(() => {
			alert('Submitted sucessfully ');
		});
	}
</script>

<div class="page grid grid-cols-12 pt-[5vh] pb-[10vh]">
	{#if $loggedIn === false}
		<section class="w-screen h-screen flex flex-col items-center justify-center text-error">
			<h1 class=" font-bold text-xl">LOGGIN TO CREATE OR VIEW CONTENT !!</h1>
			<a href="/" class=" btn btn-outline btn-primary">LOG IN </a>
		</section>
	{:else}
		<h1 class=" col-span-12 text-center ">New Announcement</h1>
		<input
			bind:value={announcementTitle}
			type="text"
			placeholder="Title"
			class="input input-primary col-span-12 m-2 rounded-none"
		/>
		<textarea
			bind:value={announcementDescribion}
			placeholder="Describtion"
			name=""
			id=""
			cols="30"
			rows="5"
			class=" textarea textarea-primary col-span-12 m-2 rounded-none"
		/>
		<Cast on:coursesSelected={ e=> shareTo=e.detail }/>
		<button on:click={submitAnouncement} class="btn  btn-primary col-span-12  m-2 rounded-none "
			>Submit</button
		>

	

	{/if}
</div>
