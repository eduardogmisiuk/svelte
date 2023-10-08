<script>
	import { messages } from '../stores.js';
	import MessageCard from '../components/MessageCard.svelte';

	export let data;
</script>

<div class='
		flex flex-col
		rounded-2xl
		m-2 p-5 gap-2
		bg-white
	'
>
	{#each $messages as message (message.id)}
		<MessageCard {message} user={data.user} />
	{/each}
</div>