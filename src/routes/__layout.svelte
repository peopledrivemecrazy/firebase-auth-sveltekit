<script>
  import { firebaseApp } from "$lib/firebase";
  import { onMount } from "svelte";
  import { fbenv } from "$stores/user";
  import { authChanged } from "$lib/auth";

  onMount(() => {
    if (!$fbenv.firebaseControlled) {
      firebaseApp;
    }

    authChanged();
  });
</script>

<slot />
