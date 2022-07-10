<script lang="ts">
	import Meeting from './../routes/create/meeting.svelte';
	import { collection, doc, getDocs, increment, query, updateDoc, where } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { db } from './firebase/config';
	import { userDetails } from './stores/globals';
	import Icon from '@iconify/svelte';

	let events: any[] = [];
	function getEvents() {
		getDocs(
			query(collection(db, 'events'), where('shareTo', 'array-contains', $userDetails?.course))
		)
			.then((docs) => {
				if (!docs.empty) {
					docs.forEach((doc) => {
						events = [...events, { ...doc.data(), docId: doc.id }];
					});
				}
			})
			.catch((e) => alert(e));
	}

	function addLike(meeting: any) {
		updateDoc(doc(db, 'events', meeting.docId), {
			upvotes: increment(1)
		})
			.then(() => {
				alert('like added');
			})
			.catch((e) => alert(e));
	}

	onMount(() => {
		getEvents();
	});
</script>

<div class="meeting">
	{#each events as meeting}
		<section class="meeting  border-2 p-2 m-2 border-primary rounded-md shadow-lg">
			<p class="title uppercase font-bold shadow-2xl">{meeting.title}</p>

			<p class="describtion border-2 p-2 border-primary rounded-md shadow-lg">
				{meeting.describtion}
			</p>
			<div class="date-location flex flex-col justify-evenly">
				<p class="date  ">DATE: {meeting.date}</p>
				<p class="location border-2 border-primary p-2 rounded-md m-1">LOCATION :{meeting.location}</p>
			</div>
			<div class="details  flex justify-evenly border-2 border-accent p-2 ">
				<span class=""> {meeting.createdBy.registrationNo}</span>
				<span> {meeting.createdBy.name}</span>
			</div>

			<div class="likes flex  justify-center p-2">
				<button on:click={() => addLike(meeting)}>
					<Icon icon="ant-design:like-filled" />
					<span>{meeting.upvotes}</span>
				</button>
			</div>
		</section>
	{:else}
		<p class="">NO EVENTS IN YOUR CATEGORY!! CHECK AGAIN LATER</p>
	{/each}
</div>
