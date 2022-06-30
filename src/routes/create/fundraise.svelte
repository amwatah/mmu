<script lang="ts">
import Cast from '$lib/Cast.svelte';

	import { db } from '$lib/firebase/config';
import { loggedIn, userDetails } from '$lib/stores/globals';
	import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
	let fundTitle = '';
	let fundAppeal = '';
	let fundAmount = '';
	let fundContacts = '';
	let fundBilling = '';
    let shareTo : any[] = []
	async function submitFundraiser() {
		await addDoc(collection(db, 'fundraisers'), {
			title: fundTitle,
			appeal: fundAppeal,
			amount: fundAmount,
			conctacts: fundContacts,
			billing: fundBilling,
			upvotes : 0 ,
			 createdBy:  $userDetails,
			 created : serverTimestamp(),
			 shareTo : shareTo
		})
			.then(() => {
				alert('Submitted sucessfully ');
			})
			.catch((e) => alert(e));
	}
</script>



<div class="page grid grid-cols-12 pt-[5vh] pb-[10vh]">
	{#if $loggedIn == false}
	<section class='w-screen h-screen flex flex-col items-center justify-center text-error'>
		<h1 class= " font-bold text-xl"> LOGGIN TO CREATE  OR VIEW CONTENT !!  </h1>
		<a href="/" class=' btn btn-outline btn-primary'>LOG IN </a>
	</section>
 {:else}
 <h1 class=" col-span-12 text-center">Fundraise</h1>
 <input
	 bind:value={fundTitle}
	 type="text"
	 placeholder="Title"
	 class="input input-primary col-span-12 m-2 rounded-none"
 />
 <textarea
	 bind:value={fundAppeal}
	 placeholder="Appeal"
	 name=""
	 id=""
	 cols="30"
	 rows="5"
	 class=" textarea textarea-primary col-span-12 m-2 rounded-none"
 />
 <input
	 bind:value={fundAmount}
	 type="text"
	 placeholder="Target Amount"
	 class="input input-primary col-span-12 m-2 rounded-none"
 />
 <input
	 bind:value={fundContacts}
	 type="text"
	 placeholder="Contact"
	 class="input input-primary col-span-6 m-2 rounded-none"
 />
 <input
	 bind:value={fundBilling}
	 type="text"
	 placeholder="Billing address"
	 class="input input-primary col-span-6 m-2 rounded-none"
 />
 <Cast on:coursesSelected={ e=> shareTo=e.detail }/>
 <button on:click={submitFundraiser} class="btn  btn-primary col-span-12  m-2 rounded-none "
	 >Submit</button
 >
 {/if}
	
</div>
