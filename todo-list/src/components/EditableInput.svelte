<!--suppress HtmlUnknownTag -->
<script>
  export let handleSubmit;

  export let initialText = "";
  export let handleCancel = () => {
  };
  export let isEditing = false;
  export let applyBoldOnHover = true;
  export let resetTextOnSubmit = false;
  export let cursor = "pointer";

  let text = initialText;

  function handleEditText() {
    if (!isEditing) {
      isEditing = true;
    }
  }

  function handleEnter() {
    if (text && text !== "") {
      handleSubmit(text);
      isEditing = false;

      if (resetTextOnSubmit) {
        text = initialText;
      }
    }
  }

  function handleEscape() {
    handleCancel();
    isEditing = false;
    text = initialText;
  }

  const keyHandlers = {
    "Enter": handleEnter,
    "Escape": handleEscape
  };

  function handleKeyDown(pressedKey) {
    const handler = keyHandlers[pressedKey];
    if (handler) {
      handler();
    }
  }
</script>

<div aria-hidden="true"
     on:click={handleEditText}
     on:keydown={(event) => handleKeyDown(event.key)}
     class="
       {isEditing || !applyBoldOnHover ? 'text-gray-700' : 'text-gray-400'}
       hover:text-gray-700 hover:cursor-{cursor}
       transition
       w-full
     "
>
  {#if (isEditing)}
    <div class="flex w-full gap-2 justify-between">
      <!-- Even though ESLint does not like autofocus, the reason given by them doesn't seem to apply in this case -->
      <!-- svelte-ignore a11y-autofocus -->
      <input id="note-text-input"
             type="text"
             autofocus="autofocus"
             bind:value={text}
             class="border-2 rounded-xl py-1 px-2 transition flex-grow"
      />
      <div class="self-center flex justify-between">
        <iconify-icon aria-hidden="true"
                      on:click|stopPropagation={handleEnter}
                      icon="ei:check"
                      class="text-3xl cursor-pointer"
        />
        <iconify-icon aria-hidden="true"
                      on:click|stopPropagation={handleEscape}
                      icon="ei:close-o"
                      class="text-3xl cursor-pointer"
        />
      </div>
    </div>
  {:else}
    <slot />
  {/if}
</div>
