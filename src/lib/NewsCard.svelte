<script lang="ts">
	import Icon from '@iconify/svelte';
	import { doc, increment, updateDoc } from 'firebase/firestore';
import { onMount } from 'svelte';
	import { db } from './firebase/config';

	export let announcement: any;
	let likeAdded = false;
	let isAdmin = false


	function addLike() {
		updateDoc(doc(db, 'announcements', announcement.docId), {
			upvotes: increment(1)
		}).then(() => {
			alert('like added');
			likeAdded = true;
		});
	}

	onMount(()=>{

		 if (announcement.createdBy.registrationNo == undefined ) {
			 isAdmin = true
		 }
	})
</script>

<section   class={ `  m-2 p-2 rounded-md glass bg-primary hover:bg-secondary text-white ${ isAdmin ?"":" bg-error" } `}>
	{#if  isAdmin }
		 <h1 class=" text-red-700 font-bold flex items-center gap-3  ">FROM ADMIN : <span class=" text-3xl" ><Icon icon="charm:circle-tick" /></span></h1>
	{/if}
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
			 {#if  isAdmin }
			    <p>ADMIN</p>
			 {:else}
			 <p>{announcement.createdBy.registrationNo}</p>
			 {/if}
		
		</div>
	</div>
</section>
