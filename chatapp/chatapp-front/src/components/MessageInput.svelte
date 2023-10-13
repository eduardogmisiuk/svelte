<script>
	import { messageContainer, messages } from '../stores.js';
	import { onMount } from 'svelte';

	export let user;

	let text;

	function isTextNotEmpty() {
		return text && text !== '';
	}

	function handleKeyDown(pressedKey) {
		if (pressedKey === 'Enter' && isTextNotEmpty()) {
			messages.sendMessage(user, text);
			messageContainer.scrollToBottom();
			text = '';
		}
	}

	onMount(messageContainer.scrollToBottom);
</script>

<div class='m-3'>
	<input type='text'
				 placeholder='Enter message...'
				 class='
				 		w-full
				 		p-2
				 		focus:rounded-xl focus:border-gray-400
				 '
				 bind:value={text}
				 on:keydown={(event) => handleKeyDown(event.key)}
	>
</div>