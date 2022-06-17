<script>
	import { goto } from '$app/navigation';

	import Icon from '@iconify/svelte';
</script>

<div class="create-page grid grid-cols-12 gap-2 pt-[4vh] pb-[10vh] w-full overflow-x-hidden">
	<p class=" col-span-12 text-center">share new Activity</p>

	<section
		on:click={() => goto('create/announce')}
		class="col-span-8  rounded-md bg-primary h-[20vh] m-1 flex  flex-col justify-center items-center hover:bg-secondary text-white "
	>
		<Icon icon="zondicons:announcement" class="text-3xl" />
		<p>Announcement</p>
	</section>
	<section
		on:click={() => goto('create/activity')}
		class="col-span-4 rounded-md bg-primary h-[20vh] m-1 flex  flex-col justify-center items-center hover:bg-secondary text-white "
	>
		<Icon icon="twemoji:party-popper" class="text-3xl" />
		<p>Event</p>
	</section>
	<section
		on:click={() => goto('create/meeting')}
		class="col-span-4 rounded-md bg-primary h-[20vh] m-1 flex  flex-col justify-center items-center hover:bg-secondary text-white "
	>
		<Icon icon="healthicons:group-discussion-meeting" class="text-3xl" />
		<p>Meeting</p>
	</section>
	<section
		on:click={() => goto('create/fundraise')}
		class="col-span-8 rounded-md bg-primary h-[20vh] m-1 flex  flex-col justify-center items-center hover:bg-secondary text-white "
	>
		<Icon icon="emojione:money-bag" class="text-3xl" />
		<p>Fundraiser</p>
	</section>
	<section
		on:click={() => goto('create/blog')}
		class="col-span-12 rounded-md bg-primary h-[20vh] m-1 flex  flex-col justify-center items-center hover:bg-secondary text-white "
	>
		<Icon icon="fa-solid:blog" class="text-3xl" />
		<p>Blog</p>
	</section>
</div>
