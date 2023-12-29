<script>
	import MessageList from './MessageList.svelte';
	import MessageInput from './MessageInput.svelte';

</script>

<!-- The max height value should subtract margin and padding to effectively occupy all the screen -->
<div class='
			 flex flex-col
			 rounded-xl
			 m-4 pr-0 pb-0
			 bg-white
			 max-h-[calc(100vh-theme(spacing.4)-theme(spacing.5))]
		 '
>
	<MessageList />
	<hr />
	<MessageInput />
</div>
