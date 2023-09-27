<script>
  import Card from "./Card.svelte";
  import Note from "../Note.svelte";
  import { items } from "../../stores.js";

  $: checkedItems = $items.filter(item => item.isChecked);
</script>

<Card title="Done">
  {#each checkedItems as item (item.id)}
    <Note {item} />
  {/each}
</Card>