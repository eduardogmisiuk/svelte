<script>
  import { slide } from "svelte/transition";
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
    items.updateTodo(item);
  }

  function toggleCheckbox(e) {
    item.isChecked = e.currentTarget.checked;
    items.updateTodo(item);
  }
</script>

<div aria-hidden="true"
     class="
       rounded-2xl
       flex transition
       bg-white
       hover:bg-gray-100
       p-2 mt-3
     "
     transition:slide|global
     on:mouseenter={onMouseEnter}
     on:mouseleave={onMouseLeave}
>
  <input type="checkbox"
         checked={item.isChecked}
         class="outline-none rounded-full self-center mr-2"
         on:change={toggleCheckbox}
  />
  <div class="flex flex-col w-full">
    <EditableInput {handleSubmit}
                   applyBoldOnHover={false}
                   bind:initialText={item.text}
                   cursor="text"
    >
        <span class="break-all">
          {item.text}
        </span>
    </EditableInput>
    <small class="text-gray-400">{item.createdAtFormatted}</small>
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