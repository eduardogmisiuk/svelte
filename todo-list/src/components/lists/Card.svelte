<script>
  export let title;
</script>

<div
  class="
      flex content-center flex-col overflow-y-auto
      rounded-xl
      bg-sky-100
      w-full
      md:max-h-[90vh]
      sm:max-h-[40vh]
      p-3
  "
>
  <div class="border-b-2 border-b-white">
    <h3 class="text-center text-2xl font-bold mb-2">
      {title}
    </h3>
  </div>
  <slot />
</div>