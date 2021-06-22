<script>
  import "../app.postcss";
  import { firebaseApp } from "$lib/firebase";
  import { onMount } from "svelte";
  import { fbenv } from "$stores/user";
  import { authChanged } from "$lib/auth";
  import { browser } from "$app/env";

  onMount(() => {
    if (!$fbenv.firebaseControlled) {
      firebaseApp;
    }

    authChanged();
  });
  if (browser) {
    (async () => await import("bootstrap/dist/js/bootstrap.bundle").default)();
  }
</script>

<slot />
