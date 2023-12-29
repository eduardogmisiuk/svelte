<script>
	import MessageCard from './MessageCard.svelte';
	import { messages } from '../stores/messageStore.js';
	import { onMount } from 'svelte';
	import {messageContainerStore} from "../stores/messageContainerStore.js";

	let container = null;

	onMount(() => {
		messageContainerStore.addMessageContainer(container);
		messageContainerStore.scrollToBottom();
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
		<MessageCard {message} />
	{/each}
</div>