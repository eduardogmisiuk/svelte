<!--suppress HtmlUnknownTag -->
<script>
  import { items } from "../stores.js";
  import EditableInput from "./EditableInput.svelte";

  function handleSubmit(text) {
    items.addNewTodo(text);
  }
</script>

<EditableInput {handleSubmit}>
  <div>
    <iconify-icon icon="ei:plus" class="text-3xl align-middle" />
    <span class="align-middle">Create new note...</span>
  </div>
</EditableInput>
