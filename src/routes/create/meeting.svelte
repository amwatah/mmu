<script lang="ts">
import Cast from '$lib/Cast.svelte';

	import { db } from '$lib/firebase/config';
import { loggedIn, userDetails } from '$lib/stores/globals';
	import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
	let meetingTitle = '';
	let meetingLocation = '';
	let meetingParticipants = '';
	let meetingDescribtion = '';
	let meetingDate = ' ';
	let shareTo :any[] = []

	async function submitMeeting() {
		await addDoc(collection(db, 'meetings'), {
			title: meetingTitle.toUpperCase(),
			location: meetingLocation.toLocaleUpperCase(),
			participants: meetingParticipants.toUpperCase(),
			describtion: meetingDescribtion,
			date: meetingDate,
			upvotes : 0 ,
			 createdBy:  $userDetails,
			 created : serverTimestamp(),
			 shareTo: shareTo
		})
			.then(() => {
				alert('Submitted sucessfully ');
			})
			.catch((e) => alert(e));
	}
</script>

<div class="page grid grid-cols-12 pt-[5vh] pb-[10vh] ">
	{#if  $loggedIn === false }
		  <section class='w-screen h-screen flex flex-col items-center justify-center text-error'>
			   <h1 class= " font-bold text-xl"> LOGGIN TO CREATE  OR VIEW CONTENT !!  </h1>
			   <a href="/" class=' btn btn-outline btn-primary'>LOG IN </a>
		  </section>
	{:else}
	

	<h1 class=" col-span-12 text-center">New Meetup</h1>
	<input
		bind:value={meetingTitle}
		type="text"
		placeholder="Title"
		class="input input-primary col-span-12 m-2 rounded-none"
	/>
	<input
		bind:value={meetingLocation}
		type="text"
		placeholder="location"
		class="input input-primary col-span-12 m-2 rounded-none"
	/>
	<input
		bind:value={meetingParticipants}
		type="text"
		placeholder="participants"
		class="input input-primary col-span-12 m-2 rounded-none"
	/>

	<textarea
		bind:value={meetingDescribtion}
		placeholder="Describtion"
		name=""
		id=""
		cols="30"
		rows="5"
		class=" textarea textarea-primary col-span-12 m-2 rounded-none"
	/>
	<input
		bind:value={meetingDate}
		type="datetime-local"
		class="col-span-12 text-center p-2 border-2 border-primary m-2"
		name=""
		id=""
	/>
	<Cast on:coursesSelected={ e=> shareTo=e.detail }/>
	<button on:click={submitMeeting} class="btn  btn-primary col-span-12  m-2 rounded-none "
		>Submit</button
	>
	{/if}
	
</div>
