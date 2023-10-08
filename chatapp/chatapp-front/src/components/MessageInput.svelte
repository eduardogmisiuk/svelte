<script>
	import { messages } from '../stores.js';
	// import { onMount } from 'svelte';

	export let user;

	let text;

	function isTextNotEmpty() {
		return text && text !== '';
	}

	function handleKeyDown(pressedKey) {
		if (pressedKey === 'Enter' && isTextNotEmpty()) {
			messages.sendMessage(user, text);
			// messages.scrollToBottom();
			text = '';
		}
	}

	// onMount(messages.scrollToBottom);
</script>

<div class='sticky bottom-0 left-0 right-0 bg-white pb-2'>
	<hr class='mb-3'>
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