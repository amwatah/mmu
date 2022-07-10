<script lang="ts">
	import Icon from '@iconify/svelte';
	import { doc, increment, updateDoc } from 'firebase/firestore';
	import { db } from './firebase/config';

	export let blog: any;

	function addLike() {
		updateDoc(doc(db, 'blogs', blog.docId), {
			upvotes: increment(1)
		})
			.then(() => {
				alert('like added');
			})
			.catch((e) => alert(e));
	}
</script>

<section class=" border-2  border-secondary  m-2  z-50     ">
	<div class="head flex flex-col items-center border-b-2  bg-secondary  text-white  ">
		<p class="title uppercase">
			TITLE : {blog?.title}
		</p>
		<div class="author uppercase flex justify-evenly w-full items-center">
			<span> AUTHOR : {blog?.author}</span>
			<button on:click={addLike} class=" flex items-center gap-2 z-50">
				<Icon icon="ant-design:like-filled" />
				<span>{blog.upvotes}</span>
			</button>
		</div>
	</div>
	<div class="body p-1">
		<div class="collapse">
			<input type="checkbox" class="peer" />
			<div class="collapse-title  border-b-2">READ</div>
			<div class="collapse-content">
				<div class="p-2">
					{blog.body}
				</div>
			</div>
		</div>
	</div>
</section>
