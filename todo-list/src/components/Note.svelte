<script>
  import { slide, fade } from "svelte/transition";
  import { items } from "../stores.js";

  export let item;

  let isHovering = false;

  function onMouseEnter() {
    isHovering = true;
  }

  function onMouseLeave() {
    isHovering = false;
  }
</script>

<div aria-hidden="true"
     class="
       border-2 border-gray-400 rounded-2xl
       flex justify-between items-center transition
       bg-gray-100
       hover:bg-gray-300
       p-2
     "
     transition:slide
     on:mouseenter={onMouseEnter}
     on:mouseleave={onMouseLeave}
>
  <div class="flex items-center gap-1">
    <input id="note-checkbox-{item.id}" type="checkbox" bind:checked={item.isChecked}
           class="outline-none rounded-full self-center" />
    <label for="note-checkbox-{item.id}" class="{item.isChecked ? 'line-through' : ''}">
      {item.text}
    </label>
  </div>
  {#if isHovering}
    <div transition:fade={{ duration: 150 }} class="self-end flex justify-center">
      <iconify-icon aria-hidden="true"
                    icon="ei:trash"
                    class="text-3xl hover:cursor-pointer"
                    on:click={() => items.removeTodo(item.id)}
      />
      <!--      <iconify-icon icon="ei:pencil" class="text-3xl" />-->
    </div>
  {/if}
</div>