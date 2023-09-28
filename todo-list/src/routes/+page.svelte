<script>
  import TodoList from "../components/lists/TodoList.svelte";
  import DoneList from "../components/lists/DoneList.svelte";
</script>

<div class="flex justify-evenly
            md:flex-row md:gap-5
            sm:flex-col sm:gap-8
           ">

  <div class="w-full">
    <TodoList />
  </div>

  <div class="w-full">
    <DoneList />
  </div>
</div>
