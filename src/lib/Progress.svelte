<script>
  export let step = 1;
</script>

<nav aria-label="Progress">
  <ol class="space-y-4 md:flex md:space-y-0 md:space-x-8">
    <li class="md:flex-1">
      <!-- Completed Step -->
      <div
        class="group pl-4 py-2 flex flex-col border-l-4 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        class:progress-active={step <= 3}
      >
        <span
          class="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800"
          >Step 1</span
        >
        <span class="text-sm font-medium">Create the widget</span>
      </div>
    </li>

    <li class="md:flex-1">
      <!-- Current Step -->
      <div
        class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        class:progress-active={(step <= 3 && step === 2) || step > 1}
      >
        <span
          class="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700"
          >Step 2</span
        >
        <span class="text-sm font-medium">Configure GIFs</span>
      </div>
    </li>

    <li class="md:flex-1">
      <!-- Upcoming Step -->
      <div
        class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        class:progress-active={step === 3}
      >
        <span
          class="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700"
          >Step 3</span
        >
        <span class="text-sm font-medium">Preview</span>
      </div>
    </li>
  </ol>
</nav>
