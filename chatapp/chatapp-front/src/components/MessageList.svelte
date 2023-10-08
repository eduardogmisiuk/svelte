<script>
	import MessageCard from './MessageCard.svelte';
	// import { onMount } from 'svelte';
	import { messages } from '../stores.js';

	export let user;

	let messageContainer = null;

	// onMount(() => {
	// 	storeState.addMessageContainer(messageContainer);
	// });
</script>

<div class='
			 flex flex-col
			 rounded-xl
			 gap-2 pr-3 mb-3
		 '
		 bind:this={messageContainer}
>
	{#each $messages as message (message.id)}
		<MessageCard {message} {user} />
	{/each}
</div>