<!--suppress HtmlUnknownTag -->
<script>
  import { items } from "../stores.js";
  import EditableInput from "./EditableInput.svelte";

  function handleSubmit(text) {
    items.addNewTodo(text);
  }
</script>

<div class="mt-3">
  <EditableInput {handleSubmit} resetTextOnSubmit={true}>
    <div>
      <iconify-icon icon="ei:plus" class="text-3xl align-middle" />
      <span class="align-middle">Create new note...</span>
    </div>
  </EditableInput>
</div>
