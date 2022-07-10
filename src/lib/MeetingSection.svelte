<script lang="ts">
	import { collection, doc, getDocs, increment, query, updateDoc, where } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { db } from './firebase/config';
	import { userDetails } from './stores/globals';
	import Icon from '@iconify/svelte';

	let meetings: any[] = [];
	function getMeetings() {
		getDocs(
			query(collection(db, 'meetings'), where('shareTo', 'array-contains', $userDetails?.course))
		)
			.then((docs) => {
				if (!docs.empty) {
					docs.forEach((doc) => {
						meetings = [...meetings, { ...doc.data(), docId: doc.id }];
					});
				}
			})
			.catch((e) => alert(e));
	}

	function addLike(meeting: any) {
		updateDoc(doc(db, 'meetings', meeting.docId), {
			upvotes: increment(1)
		})
			.then(() => {
				alert('like added');
			})
			.catch((e) => alert(e));
	}

	onMount(() => {
		getMeetings();
	});
</script>

<div class="meeting">
	{#each meetings as meeting}
		<section class="meeting glass bg-primary text-white  hover:bg-primary border-4  p-2 m-2 border-primary rounded-lg  ">
			<p class="title uppercase font-bold shadow-2xl text-center">{meeting.title}</p>
			<p class="attendants uppercase   rounded-md mb-1 text-center font-bold">
				<span class=" font-bold ">ATTENDANTS </span>: {meeting.participants}
			</p>
			<p class="describtion  rounded-md border-y-2 p-2 italic ">
				{meeting.describtion}
			</p>
			<div class="date-location flex justify-evenly">
				<p class="date">DATE: {meeting.date}</p>
				<p class="location">LOCATION :{meeting.location}</p>
			</div>
			<div class="details  flex justify-evenly  p-2 ">
				<span> {meeting.createdBy.registrationNo}</span>
				<span> {meeting.createdBy.name}</span>
			</div>

			<div class="likes flex  justify-center p-2">
				<button on:click={() => addLike(meeting)} class=" hover:animate-bounce">
					<Icon icon="ant-design:like-filled" />
					<span>{meeting.upvotes}</span>
				</button>
			</div>
		</section>
	{:else}
		<p class="">NO MEETINGS IN YOUR CATEGORY!! CHECK AGAIN LATER</p>
	{/each}
</div>
