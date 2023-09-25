<script>
  import TodoItem from "../models/TodoItem.js";
  import NewNote from "../components/NewNote.svelte";
  import Note from "../components/Note.svelte";

  let items = [new TodoItem(1, "asdfasdfasdf")];

  function addNewTodo(text) {
    items = [...items, new TodoItem(items.length + 1, text)];
  }
</script>

<div
  class="
      flex content-center flex-col overflow-y-auto
      border-solid border-2 border-gray-400 rounded-xl
      bg-sky-100
      p-3
      gap-3
      w-1/2 max-h-96
  "
>
  <NewNote on:new-note={(event) => addNewTodo(event.detail.text)} />
  {#each items as item (item.id)}
    <Note {item} />
  {/each}
</div>
