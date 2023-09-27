<script>
  import { items } from "../../stores.js";
  import NewNote from "../NewNote.svelte";
  import Note from "../Note.svelte";
  import Card from "./Card.svelte";

  $: notCheckedItems = $items.filter(item => !item.isChecked);
</script>

<Card title="To Do">
  <NewNote />
  {#each notCheckedItems as item (item.id)}
    <Note {item} />
  {/each}
</Card>