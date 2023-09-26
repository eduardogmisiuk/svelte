<script>
  import { slide, blur, fade } from "svelte/transition";
  import { items } from "../stores.js";
  import EditableInput from "./EditableInput.svelte";

  export let item;

  let isHovering = false;

  function onMouseEnter() {
    isHovering = true;
  }

  function onMouseLeave() {
    isHovering = false;
  }

  function handleSubmit(text) {
    item.text = text;
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
     transition:slide|global
     on:mouseenter={onMouseEnter}
     on:mouseleave={onMouseLeave}
>
  <div class="flex items-center gap-2">
    <input type="checkbox" bind:checked={item.isChecked}
           class="outline-none rounded-full self-center" />
    <EditableInput {handleSubmit}
                   applyBoldOnHover={false}
                   bind:initialText={item.text}
                   cursor="text"
    >
      <span class="{item.isChecked && 'line-through'} break-all">
        {item.text}
      </span>
    </EditableInput>
  </div>
  {#if isHovering}
    <span class="flex flex-row">
      <iconify-icon aria-hidden="true"
                    icon="ei:trash"
                    class="text-2xl hover:cursor-pointer self-center"
                    on:click={() => items.removeTodo(item.id)}
      />
    </span>
  {/if}
</div>