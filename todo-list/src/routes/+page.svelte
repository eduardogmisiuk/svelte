<script>
	import TodoItem from '../models/TodoItem.js';

	let items = [];
	for (let i = 1; i <= 30; i++) {
		items.push(new TodoItem(i));
	}

	function addNewTodo() {
		items = [...items, new TodoItem(items.length + 1)];
	}
</script>

<div class="content-center flex flex-col gap-3">
	<button
		class="bg-sky-300 items-center rounded-xl self-center px-1.5 py-1 border-black border-2"
		on:click={addNewTodo}
	>
		Add new item
	</button>

	<div
		class="max-h-96 flex content-center flex-col bg-white overflow-y-auto border-solid border-2 border-black rounded-xl p-2 gap-1"
	>
		{#each items as item (item.id)}
			<span>
				<input type="checkbox" bind:checked={item.isChecked} />
				{item.text}
			</span>
		{/each}
	</div>
</div>
