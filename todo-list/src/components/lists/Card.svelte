<script>
  export let title;
</script>

<div
  class="
      flex content-center flex-col overflow-y-auto
      border-solid border-2 border-gray-400 rounded-xl
      bg-sky-100
      p-3
      w-full max-h-96
  "
>
  <span>
    <h3 class="text-center text-2xl font-bold">{title}</h3>
    <hr />
  </span>
  <slot />
</div>