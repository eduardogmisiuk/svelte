<script>
  import user from '../stores/userStore.js';

  let newUser;

  function isTextNotEmpty() {
    return newUser && newUser !== '';
  }

  function handleKeyDown(pressedKey) {
    if (pressedKey === 'Enter' && isTextNotEmpty()) {
      user.updateUser(newUser);
    }
  }
</script>

<div class="flex flex-col justify-center align-middle max-w-[50vw] m-4">
  <label for="user-input">Enter your username and press Enter:</label>
  <input
      id="user-input"
      type="text"
      bind:value={newUser}
      on:keydown={(event) => handleKeyDown(event.key)}
  />
</div>