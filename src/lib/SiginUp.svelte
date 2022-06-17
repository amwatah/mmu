<script lang="ts">
	import { db } from './firebase/config.js';
	import { addDoc, collection } from 'firebase/firestore';
import { goto } from '$app/navigation';
  
    export let hasAccount : Function
	let isStudent = true;
	let studentName = '';
	let studentYear = '';
	let studentPassword = '';
	let studentRegno = '';
	let tutorName = '';
	let tutorFaculty = '';
	let turorPassword = '';

	async function studentSignup() {
		await addDoc(collection(db, 'users'), {
			user: 'student',
			name: studentName.toUpperCase(),
			year: studentYear.toUpperCase(),
			password: studentPassword,
			registrationNo: studentRegno.toUpperCase()
		})
			.then(() => {
				alert('signed up ! Welcome to Multimedia');
               
			})
			.catch((e) => {
				alert('error:' + e);
			});
	}
	async function tutorSignup() {
		await addDoc(collection(db, 'users'), {
			user: 'tutor',
			name:  tutorName.toUpperCase(),
			faculty: tutorFaculty.toUpperCase(),
			password: turorPassword,
			
		})
			.then(() => {
				alert('signed up ! Welcome to Multimedia');
              
			})
			.catch((e) => {
				alert('error:' + e);
			});
	}
</script>

<div class="flex flex-col items-center">
	<div class="switch flex gap-2">
		<p class="">STUDENT</p>
		<input on:change={() => (isStudent = !isStudent)} type="checkbox" class="toggle" />
		<p class="">TUTOR</p>
	</div>
	<div class="form">
		{#if isStudent}
			<div class="student-form">
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
				<input type="text" class="input input-primary mt-1 " placeholder="confirm password" />

				<br />
				<input
					bind:value={studentRegno}
					type="text"
					class="input input-primary mt-1 w-full"
					placeholder="registration Number "
				/>
				<br />
				<button on:click={studentSignup} class="btn btn-primary w-full mt-2">REGISTER</button>
			</div>
		{:else}
			<div class="tutor-form">
				<input
					bind:value={tutorName}
					type="text"
					class="input input-primary mt-1 "
					placeholder="Username"
				/>
				<input
					bind:value={tutorFaculty}
					type="text"
					class="input input-primary mt-1 "
					placeholder="Main Faculty"
				/>
				<br />
				<input
					bind:value={turorPassword}
					type="text"
					class="input input-primary mt-1 "
					placeholder="password"
				/>
				<input type="text" class="input input-primary mt-1 " placeholder="confirm password" />
				<br />
				<button on:click={tutorSignup} class="btn btn-primary w-full mt-2">REGISTER</button>
			</div>
		{/if}
        <button on:click={ ()=> hasAccount() } class="btn btn-outline btn-primary btn-sm mt-1">login</button>
	</div>

	<br />
</div>
