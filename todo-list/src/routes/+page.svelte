<script>
  import Note from "../components/Note.svelte";
  import NewNote from "../components/NewNote.svelte";

  import { items } from "../stores.js";
</script>

<div
  class="
      flex content-center flex-col overflow-y-auto
      border-solid border-2 border-gray-400 rounded-xl
      bg-sky-100
      p-3
      gap-3
      w-1/3 max-h-96
  "
>
  <NewNote />
  {#each $items as item (item.id)}
    <Note {item} />
  {/each}
</div>
