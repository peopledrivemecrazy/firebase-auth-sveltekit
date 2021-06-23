<script>
  import { browser } from "$app/env";

  import { loginWithRedirect, doLogout } from "$lib/auth";
  import Loader from "$lib/Loader.svelte";
  import { currentUser } from "$stores/user";
  import { onMount } from "svelte";
  // You can specify which plugins you need

  let loader = false;
  async function doLogin() {
    if (browser) {
      window.location.href += "#gr";
      loader = true;
    }
    loginWithRedirect();
  }

  onMount(() => {
    if (window.location.hash === "#gr") {
      loader = true;
    }
  });

  $: {
    if ($currentUser.user) {
      loader = false;
      if (browser) {
        history.replaceState(null, null, " ");
      }
    }
  }
</script>

{#if $currentUser.loggedIn}
  <button class="btn btn-danger" on:click={doLogout}>Logout</button>
{:else}
  <button class="btn btn-success" on:click={doLogin}> Login </button>
{/if}

<div>
  {#if $currentUser.user}
    <p>Welcome {$currentUser.user.displayName}</p>
    <p>You are logged in as {$currentUser.user.email}</p>
  {:else}
    <p>Please login</p>
  {/if}
</div>

<!-- Example single danger button -->
<div class="btn-group">
  <button
    type="button"
    class="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href=".">Action</a></li>
  </ul>
</div>

{#if loader}
  <Loader />
{/if}
