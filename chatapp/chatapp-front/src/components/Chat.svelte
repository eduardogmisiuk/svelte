<script>
	import { messages } from '../stores.js';
	import MessageCard from './MessageCard.svelte';

	export let user;
</script>

<div class='
		flex flex-col
		rounded-xl
		m-4 p-5 gap-2
		bg-white
		max-h-[97vh]
		overflow-y-auto
	'
>
	{#each $messages as message (message.id)}
		<MessageCard {message} {user} />
	{/each}
</div>
