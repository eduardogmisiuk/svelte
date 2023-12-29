<script>
	import { messages } from '../stores/messageStore.js';
	import {messageContainerStore} from "../stores/messageContainerStore.js";
	import user from '../stores/userStore.js';

	let text;
	let scrollTimeout = null;

	function isTextNotEmpty() {
		return text && text !== '';
	}

	function handleKeyDown(pressedKey) {
		if (pressedKey === 'Enter' && isTextNotEmpty()) {
			messages.sendMessage($user, text);
			text = '';
			if (scrollTimeout) {
				clearTimeout(scrollTimeout);
			}
			scrollTimeout = setTimeout(() => {
				messageContainerStore.scrollToBottom();
				scrollTimeout = null;
			}, 500);
		}
	}
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