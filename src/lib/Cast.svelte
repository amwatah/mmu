<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	import { faculties } from './stores/globals';
	const dispatch = createEventDispatcher();

	let audience: any[] = [];

	function toggleCourse(e: any, data: string) {
		if (e.target.checked) {
			if (!audience.includes(data)) {
				audience = [...audience, data];
			}
		} else {
			const filteredArray = audience.filter((item) => {
				return item !== data;
			});

			audience = filteredArray;
		}
	}
	function toggleFaculty(e: any, data: any[]) {
		if (e.target.checked) {
			data.forEach((course) => {
				if (!audience.includes(course)) {
					audience = [...audience, course];
				}
			});
		} else {
			data.forEach((course) => {
				const filteredArray = audience.filter((item) => {
					return item !== course;
				});
				audience = filteredArray;
			});
		}
	}
</script>

<div class="cast w-screen ">
	<div class="collapse border-2 m-2 ">
		<input type="checkbox" class="peer" />
		<div class="collapse-title flex justify-between  text-primary  ">
			<p class="">SHARE WITH</p>
			<button
				on:click={() => {
					if (audience.length < 1) {
						dispatch('coursesSelected', ['ALL']);
					} else {
						dispatch('coursesSelected', audience);
					}
				}}
				class=" z-50  btn btn-circle btn-primary ">OK</button
			>
			<div class="icon"><Icon icon="radix-icons:dropdown-menu" class=" text-2xl" /></div>
		</div>

		<div class="collapse-content">
			{#each $faculties as faculty}
				<div class="collapse mb-1">
					<input type="checkbox" class="peer" />
					<div
						class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
					>
						<div class="faculty flex">
							<input
								on:change={(e) => toggleFaculty(e, faculty.programmes)}
								type="checkbox"
								name=""
								id=""
								class=" toggle z-50"
							/>
							<p>{faculty.facultyTitle}</p>
						</div>
					</div>
					<div
						class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
					>
						{#each faculty.programmes as programme}
							<div class="courses flex justify-between items-center my-1">
								<p class="">{programme}</p>
								<input
									on:change={(e) => toggleCourse(e, programme)}
									type="checkbox"
									name=""
									id=""
									class=" toggle"
								/>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
