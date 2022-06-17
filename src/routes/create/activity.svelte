<script>
	import { db } from '$lib/firebase/config';
	import { addDoc, collection } from 'firebase/firestore';
	let eventTitle = '';
	let eventLocation = '';
	let eventDescribtion = '';
	let eventDate = ' ';

	async function submitEvent() {
		await addDoc(collection(db, "events"), {
            title : eventTitle.toUpperCase(),
             location : eventLocation.toUpperCase(),
             describtion : eventDescribtion,
             date : eventDate
        }).then(() => {
			alert('Submitted sucessfully ');
		}).catch( e=> alert( e))
	}
</script>

<div class="page grid grid-cols-12 pt-[5vh]">
	<h1 class=" col-span-12 text-center">New Event</h1>
	<input bind:value={ eventTitle}  type="text" placeholder="Title" class="input input-primary col-span-12 m-2 rounded-none" />
	<input
        bind:value= { eventLocation}
		type="text"
		placeholder="location"
		class="input input-primary col-span-12 m-2 rounded-none"
	/>

	<textarea
       bind:value={ eventDescribtion }
		placeholder="Describtion"
		name=""
		id=""
		cols="30"
		rows="5"
		class=" textarea textarea-primary col-span-12 m-2 rounded-none"
	/>
	<input
        bind:value={ eventDate }
		type="datetime-local"
		class="col-span-12 text-center p-2 border-2 border-primary m-2"
		name=""
		id=""
	/>
	<button  on:click={ submitEvent } class="btn  btn-primary col-span-12  m-2 rounded-none ">Submit</button>
</div>
