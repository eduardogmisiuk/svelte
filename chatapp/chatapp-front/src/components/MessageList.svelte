<script>
	import MessageCard from './MessageCard.svelte';
	import { messageContainer, messages } from '../stores.js';
	import { onMount } from 'svelte';

	export let user;

	let container = null;

	onMount(() => {
		messageContainer.addMessageContainer(container);
		messageContainer.scrollToBottom();
	});

</script>

<div class='
			 flex flex-col
			 rounded-xl
			 gap-2 p-3
			 overflow-y-auto
		 '
		 bind:this={container}
>
	{#each $messages as message (message.id)}
		<MessageCard {message} {user} />
	{/each}
</div>