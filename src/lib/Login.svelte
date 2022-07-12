<script lang="ts">
	import { goto } from '$app/navigation';

	import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
	import { db } from './firebase/config';
	import { loggedIn, userDetails } from './stores/globals';
	export let hasAccount: any;
	let userName = '';
	let password = '';
	type LoginState = 'valid' | 'notLogged' | 'invalid';
	let currentLoginState: LoginState = 'notLogged';

	 function login() {
		const queryRef = query(
			collection(db, 'users'),
			where('name', '==', userName.toUpperCase()),
			where('password', '==', password.toString())
		);
		 getDocs(queryRef).then((snapShot) => {
			if (snapShot.empty) {
				currentLoginState = 'invalid';
			} else {
				currentLoginState = 'valid';
				snapShot.forEach(  (doc)=>{
					userDetails.set( doc.data())
				})
				goto('/create');
				alert("Welcome to MMU  hub")
				loggedIn.set(true)
				
			}
		});
	}
</script>

<div class="">
	<input
		bind:value={userName}
	     type="text"
		class="input input-primary mt-1 "
		placeholder="Username"
	/>
	<br />
	<input
		bind:value={password}
		type="password"
		class="input input-primary mt-1 "
		placeholder="Password"
	/>

	<br />
	{#if currentLoginState === 'invalid'}
		<p class="w-full text-red-600">Invalid credentials ! try again</p>
	{/if}
	<button on:click={login} class="btn w-full mt-2 btn-primary">Login</button>
	<button on:click={hasAccount} class=" underline p-3">Register ?</button>
</div>
