<script>
  import { loginWithGoogle, doLogout } from "$lib/auth";
  import { currentUser } from "$stores/user";
  // You can specify which plugins you need
</script>

{#if $currentUser.loggedIn}
  <button class="btn btn-danger" on:click={doLogout}>Logout</button>
{:else}
  <button class="btn btn-success" on:click={loginWithGoogle}> Login </button>
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
