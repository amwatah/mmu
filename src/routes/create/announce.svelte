<script>
	let announcementTitle = '';
	let announcementDescribion = '';

	function submitAnouncement() {

        
    }
</script>

<div class="page grid grid-cols-12 pt-[5vh]">
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
	<button on:click={submitAnouncement} class="btn  btn-primary col-span-12  m-2 rounded-none "
		>Submit</button
	>
</div>
