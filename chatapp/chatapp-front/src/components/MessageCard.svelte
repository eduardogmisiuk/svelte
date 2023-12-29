<script>
	import { slide } from 'svelte/transition';
	import user from '../stores/userStore.js';

	export let message;

	const messageSelfAlign = $user === message.sender ? 'self-end' : 'self-start';
</script>

<div transition:slide
		 class='
			 max-w-fit
			 flex flex-col justify-start
			 bg-blue-100
			 rounded-2xl p-3
			 {messageSelfAlign}
		 '
>
	<strong>
		{message.sender}
	</strong>
	<span>
		{message.text}
	</span>
	<small>
		<time>
			{message.createdAtFormatted}
		</time>
	</small>
</div>
