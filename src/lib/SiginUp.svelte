<script lang="ts">
	import { db } from './firebase/config.js';
	import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
	import FacultyCategory from './FacultyCategory.svelte';
import Cast from './Cast.svelte';
import Icon from '@iconify/svelte';

	export let hasAccount: Function;
	let isStudent = true;
	let studentName = '';
	let studentYear = '';
	let studentPassword = '';
	let studentPass2 = '';
	let studentRegno = '';
	let studentFaculty = '';
	let studentCourse = '';
	let tutorName = '';
	let tutorFaculty:any[]= []
	let turorPassword = '';
	let tutorPass2 = '';

	function checkPass() {
		if (studentPassword != studentPass2 || turorPassword != turorPassword) {
			return 'passwords do not match';
		}
	}

	async function studentSignup() {
		if (checkPass() != 'passwords do not match') {
			await addDoc(collection(db, 'users'), {
				user: 'student',
				name: studentName.toUpperCase(),
				year: studentYear.toUpperCase(),
				password: studentPassword,
				registrationNo: studentRegno.toUpperCase(),
				faculty: studentFaculty.toUpperCase(),
				course: studentCourse.toUpperCase(),

				created: serverTimestamp(),
				verified: false
			})
				.then(() => {
					alert('signed up ! Welcome to Multimedia');
				})
				.catch((e) => {
					alert('error:' + e);
				});
		} else {
			alert('Error passwords do not match! ');
		}
	}
	async function tutorSignup() {
		if (checkPass() != 'passwords do not match') {
			await addDoc(collection(db, 'users'), {
				user: 'tutor',
				name: tutorName.toUpperCase(),
				faculty :tutorFaculty,
				password: turorPassword,
				verified :false,
				created : serverTimestamp()
			})
				.then(() => {
					alert('signed up ! Welcome to Multimedia');
				})
				.catch((e) => {
					alert('error:' + e);
				});
		} else {
			alert('Password do not match');
		}
	}
</script>

<div class="flex flex-col items-center pb-[10vh] ">
	<div class="switch flex gap-2">
		<p class="">STUDENT</p>
		<input on:change={() => (isStudent = !isStudent)} type="checkbox" class="toggle" />
		<p class="">TUTOR</p>
	</div>
	<div class="form">
		{#if isStudent}
			<div class="student-form  ">
				<input
					bind:value={studentName}
					type="text"
					class="input input-primary mt-1 "
					placeholder="Username"
				/>
				<input
					bind:value={studentYear}
					type="text"
					class="input input-primary mt-1 "
					placeholder="year of study e.g 3.2"
				/>
				<br />
				<input
					bind:value={studentPassword}
					type="text"
					class="input input-primary mt-1 "
					placeholder="password"
				/>
				<input
					bind:value={studentPass2}
					type="text"
					class="input input-primary mt-1 "
					placeholder="confirm password"
				/>

				<br />
				<input
					bind:value={studentRegno}
					type="text"
					class="input input-primary mt-1 w-full"
					placeholder="registration Number "
				/>
				<br />
				<section class="course  mx-auto flex flex-col justify-center">
					<p>PICK YOUR COURSE</p>
					<FacultyCategory
						on:courseSelected={(e) => {
							studentFaculty = e.detail.faculty;
							studentCourse = e.detail.programme;
						}}
					/>
				</section>
				<button on:click={studentSignup} class="btn btn-primary w-full mt-2">REGISTER</button>
			</div>
		{:else}
			<div class="tutor-form ">
				<input
					bind:value={tutorName}
					type="text"
					class="input input-primary mt-1  w-full "
					placeholder="Username"
				/>
				<input
			/>
				<br />
				<input
					bind:value={turorPassword}
					type="text"
					class="input input-primary mt-1 "
					placeholder="password"
				/>
				<input
					bind:value={tutorPass2}
					type="text"
					class="input input-primary mt-1 "
					placeholder="confirm password"
				/>
				<Cast on:coursesSelected={e=> tutorFaculty= e.detail} />
				<br />
				<button on:click={tutorSignup} class="btn btn-primary w-full mt-2">REGISTER</button>
			</div>
		{/if}
	    <button  on:click={ ()=> hasAccount() } class="login fixed top-0 left-0 z-50 text-3xl text-accent animate-bounce m-3">
			<Icon icon="ic:baseline-login"   class=" " />
		</button>
	</div>

	<br />
</div>
