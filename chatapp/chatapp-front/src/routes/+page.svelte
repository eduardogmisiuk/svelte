<script>
	import Chat from '../components/Chat.svelte';
  import user from '../stores/userStore.js';
  import UserInput from "../components/UserInput.svelte";

  let hasUser = false;

  $: {
    hasUser = $user !== null && $user !== '';
  }
</script>

{#if hasUser}
  <Chat />
{:else}
  <UserInput />
{/if}
