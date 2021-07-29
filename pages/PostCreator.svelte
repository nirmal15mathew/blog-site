<script>
  import { getContext } from "svelte";
  import CustomLoginForm from "../components/CustomLoginForm.svelte";
  const userLoggedIn = getContext("user-log");
  console.log(userLoggedIn);
</script>

<main>
  {#if $userLoggedIn.state}
    <h3>Welcome</h3>
  {:else}
    <CustomLoginForm />
  {/if}
</main>