<script>
	import { db } from '$lib/firebase/config';

	import { addDoc, collection } from 'firebase/firestore';

	let blogTitle = ' ';
	let blogAuthor = ' ';
	let blogBody = '';

	async function submitBlog() {
		await addDoc(collection(db, 'blogs'), {
             title : blogTitle,
             author : blogAuthor,
             body : blogBody,
            
        })
			.then(() => {
				alert('blog added sucessfully');
			})
			.catch((e) => {
				alert(e);
			});
	}
</script>

<div class="page grid grid-cols-12 pt-[5vh] pb-[10vh] ">
	<h1 class=" col-span-12 text-center">Blog</h1>
	<input
        bind:value={ blogTitle}
		type="text"
		placeholder="Blog Title"
		class="input input-primary col-span-12 m-2 rounded-none"
	/>
	<input
        bind:value={ blogAuthor }
		type="text"
		placeholder="Author"
		class="input input-primary col-span-12 m-2 rounded-none"
	/>
	<textarea
        bind:value={  blogBody}
		placeholder="Body"
		name=""
		id=""
		cols="30"
		rows="5"
		class=" textarea textarea-primary col-span-12 m-2 rounded-none"
	/>

	<button  on:click={  submitBlog} class="btn  btn-primary col-span-12  m-2 rounded-none ">Submit</button>
</div>
