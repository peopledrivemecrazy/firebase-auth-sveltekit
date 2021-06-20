<script>
  import { loginWithGoogle, doLogout } from "$lib/auth";
  import { currentUser } from "$stores/user";
</script>

{#if $currentUser.loggedIn}
  <button on:click={doLogout}>Logout</button>
{:else}
  <button on:click={loginWithGoogle}> Login </button>
{/if}

<div>
  {#if $currentUser.user}
    <p>Welcome {$currentUser.user.displayName}</p>
    <p>You are logged in as {$currentUser.user.email}</p>
  {:else}
    <p>Please login</p>
  {/if}
</div>
