<script lang="ts">
	import Cast from '$lib/Cast.svelte';

	import { db } from '$lib/firebase/config';
	import { loggedIn, userDetails } from '$lib/stores/globals';

	import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

	let blogTitle = '';
	let blogAuthor = '';
	let blogBody = '';
	let shareTo: any = [];

	async function submitBlog() {
		await addDoc(collection(db, 'blogs'), {
			title: blogTitle,
			author: blogAuthor,
			body: blogBody,
			upvotes: 0,
			createdBy: $userDetails,
			created: serverTimestamp(),
			shareTo: shareTo
		})
			.then(() => {
				alert('blog added sucessfully');
			})
			.catch((e) => {
				alert(e);
			});
	}
</script>

<div class="page grid grid-cols-12 pt-[5vh] pb-[10vh]  ">
	{#if $loggedIn === false}
		<section class="w-screen h-screen flex flex-col items-center justify-center text-error">
			<h1 class=" font-bold text-xl">LOGGIN TO CREATE OR VIEW CONTENT !!</h1>
			<a href="/" class=" btn btn-outline btn-primary">LOG IN </a>
		</section>
	{:else}
		<h1 class=" col-span-12  text-center ">Blog</h1>
		<input
			bind:value={blogTitle}
			type="text"
			placeholder="Blog Title"
			class="input input-primary col-span-12 sm:col-span-6 m-2 rounded-none"
		/>
		<input
			bind:value={blogAuthor}
			type="text"
			placeholder="Author"
			class="input input-primary col-span-12 sm:col-span-6 m-2 rounded-none"
		/>
		<textarea
			bind:value={blogBody}
			placeholder="Body"
			name=""
			id=""
			cols="30"
			rows="5"
			class=" textarea textarea-primary col-span-12 m-2 rounded-none"
		/>

		<Cast on:coursesSelected={(e) => (shareTo = e.detail)} />

		<button on:click={submitBlog} class="btn  btn-primary col-span-12  m-2 rounded-none "
			>Submit</button
		>
	{/if}
</div>
