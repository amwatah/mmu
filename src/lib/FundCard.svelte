<script lang="ts">
	import Icon from '@iconify/svelte';
	import { doc, increment, updateDoc } from 'firebase/firestore';
import { createEventDispatcher } from 'svelte';
	import { db } from './firebase/config';

	export let fundraiser: any;
	const dispatch = createEventDispatcher()
	function addLike() {
		updateDoc(doc(db, 'fundraisers', fundraiser.docId), {
			upvotes: increment(1)
		})
			.then(() => {
				alert('like added');
				dispatch("likeAdded")
			})
			.catch((er) => alert(er));
	}
</script>

<div class=" w-full flex flex-col  bg-secondary text-white p-2 glass hover:bg-accent">
	<div class="title">
		<p class="title text-center  border-b">{fundraiser.title}</p>
		<p class="amount text-center border-b">AMOUNT : {fundraiser.amount}</p>
	</div>
	<div class="body  border-b p-2">
		<p class="">{fundraiser.appeal}</p>
	</div>

	<div class="details flex justify-evenly gap-2 border-b">
		<p class=" border-r text-center flex-[3]">{fundraiser.createdBy.name}</p>
		<p class=" flex-1  border-r text-center">{fundraiser.createdBy.year}</p>
		<p class="flex-[3] text-center">{fundraiser.createdBy.registrationNo}</p>
	</div>

	<div class="contacts votes flex items-center  ">
		<p class=" flex-1 border-r  ">CONTACTS : <span class="">{fundraiser.conctacts}</span></p>
		<div class="votes flex-1 text-center items-center     flex justify-around ">
			<button on:click={ addLike } class=" gap-1 hover:scale-[1.2] flex items-center   ">
				<Icon icon="flat-color-icons:like" class=" text-2xl bg-white rounded-full m-1" />
				<span class=""> {fundraiser.upvotes}</span>
			</button>
		</div>
	</div>
</div>
