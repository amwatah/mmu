<script lang="ts">
	import Icon from '@iconify/svelte';
	import { doc, increment, updateDoc } from 'firebase/firestore';
	import { db } from './firebase/config';

	export let announcement: any;
	let likeAdded = false;

	function addLike() {
		updateDoc(doc(db, 'announcements', announcement.docId), {
			upvotes: increment(1)
		}).then(() => {
			alert('like added');
			likeAdded = true;
		});
	}
</script>

<section class=" border-2 m-2 p-2 rounded-md glass bg-primary hover:bg-secondary text-white">
	<h1 class=" uppercase border-b">
		{announcement.title}
	</h1>
	<div class="body border-b">
		{announcement.describtion}
	</div>
	<div class="actions  flex justify-evenly items-center ">
		<button on:click={addLike} disabled={likeAdded} class="hover:scale-[1.2]">
			<Icon icon="ant-design:like-filled" />
			<p>{announcement.upvotes}</p>
		</button>

		<div class="creator">
			<p>{announcement.createdBy.name}</p>
			<p>{announcement.createdBy.registrationNo}</p>
		</div>
	</div>
</section>
