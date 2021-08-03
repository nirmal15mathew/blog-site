<script>
  export let changeState;
  import { onMount, setContext, getContext } from "svelte";
  import sha1 from "sha1";
  import supabase from "../src/supabaseClient";
  let userName = "";
  let password = "";
  let serverUser = "";
  let serverHash = "";

  function verifyCode() {
    let passHash = sha1(password);
    if (userName === serverUser) {
      if (passHash === serverHash) {
        changeState();
      }
    }
  }
  onMount(async () => {
    let { data: authData, error } = await supabase
      .from("credentials")
      .select("*");
    serverUser = authData[0].username;
    serverHash = authData[0].hashcode;
  });
</script>
<style>
  fieldset {
    display: flex;
    flex-direction: column;
    padding: 1em;
    justify-content: space-around;
    width: min-content;
    border-radius: 0.3em;
    border: 0;
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
    background-color: transparent;
  }
  input {
    margin: 0.3em;
    padding: 0.7em;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #ccc;
    outline: none;
    transition: border 200ms;
  }
  input:focus {
    border-color: #ff3e00;
  }
  button {
    background-color: #d86b44;
    border: 0;
    color: white;
    padding: 0.5em 1em;
    width: min-content;
    border-radius: 0.2em;
    margin: 0.5em;
    margin-left: auto;
    cursor: pointer;
    transition: background 200ms;
  }
  button:hover {
    background-color: #ff3e00;
  }
</style>
<fieldset>
      <input type="text" placeholder="User Name" bind:value={userName}>
      <input type="password" placeholder="Password" bind:value={password}>
      <button on:click={verifyCode}>Login</button>
</fieldset>