<script>
  import TodoItem from "../models/TodoItem.js";
  import NewNote from "../components/NewNote.svelte";

  let items = [];

  function addNewTodo(text) {
    items = [...items, new TodoItem(items.length + 1, text)];
  }
</script>

<div class="content-center flex flex-col gap-3">
  <!--  <button-->
  <!--    class="bg-sky-300 items-center rounded-xl self-center px-1.5 py-1 border-black border-2"-->
  <!--    on:click={addNewTodo}-->
  <!--  >-->
  <!--    Add new item-->
  <!--  </button>-->

  <div
    class="max-h-96 flex content-center flex-col bg-white overflow-y-auto border-solid border-2 border-black rounded-xl p-2 gap-1"
  >
    <NewNote on:new-note={(event) => addNewTodo(event.detail.text)} />
    {#each items as item (item.id)}
			<span>
				<input type="checkbox" bind:checked={item.isChecked} class="rounded" />
        {item.text}
			</span>
    {/each}
  </div>
</div>
