<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { faculties } from './stores/globals';
	const dispatch = createEventDispatcher();
</script>

<div class="picker">
	{#each $faculties as faculty}
		<div class="collapse m-1">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				{faculty.facultyTitle.toUpperCase()}
			</div>
			<div
				class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				{#each faculty.programmes as programme}
					<button class=" p-1 w-full flex   items-center">
						<p class="flex-1">{programme}</p>
						<input
							class="p-2 w-[3vw]"
							type="checkbox"
							on:change={() => {
								dispatch('courseSelected', {
								    faculty: faculty.facultyTitle,
									programme
								});
							}}
						/>
					</button>
					<br />
				{/each}
			</div>
		</div>
	{/each}
</div>
