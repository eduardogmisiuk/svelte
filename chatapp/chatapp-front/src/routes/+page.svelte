<script>
	import Chat from '../components/Chat.svelte';

	export let data;
</script>

<Chat user={data.user} />