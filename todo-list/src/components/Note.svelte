<script>
  export let item;
</script>

<span>
  <input type="checkbox" bind:checked={item.isChecked} class="rounded" />
  {item.text}
</span>