<!--suppress HtmlUnknownTag -->

<script>
  import { createEventDispatcher } from "svelte";

  let isCreatingNewNote = false;
  let noteText = "";

  const dispatch = createEventDispatcher();

  function createNewNote() {
    if (!isCreatingNewNote) {
      isCreatingNewNote = true;
    }
  }

  function handleEnter() {
    if (noteText && noteText !== "") {
      dispatch("new-note", { text: noteText });
      noteText = "";
      isCreatingNewNote = false;
    }
  }

  function handleEscape() {
    noteText = "";
    isCreatingNewNote = false;
  }

  const keyHandlers = {
    "Enter": handleEnter,
    "Escape": handleEscape
  };

  function sendNoteToParent(pressedKey) {
    const handler = keyHandlers[pressedKey];
    if (handler) {
      handler();
    }
  }
</script>

<div aria-hidden="true"
     on:click={createNewNote}
     on:keydown={(event) => sendNoteToParent(event.key)}
     class="
       {isCreatingNewNote ? 'text-gray-700' : 'text-gray-400'}
       hover:text-gray-700 hover:cursor-pointer
       transition
       w-full
     "
>
  {#if (isCreatingNewNote)}
    <div class="flex w-full gap-2 justify-between">
      <!-- Even though ESLint does not like autofocus, the reason given by them doesn't seem to apply in this case -->
      <!-- svelte-ignore a11y-autofocus -->
      <input id="note-text-input"
             type="text"
             autofocus="autofocus"
             bind:value={noteText}
             class="border-2 rounded-xl py-1 px-2 transition flex-grow"
      />
      <div class="self-center flex justify-between">
        <iconify-icon aria-hidden="true"
                      on:click={handleEnter}
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
    <div>
      <iconify-icon icon="ei:plus" class="text-3xl align-middle" />
      <span class="align-middle">Create new note...</span>
    </div>
  {/if}
</div>
