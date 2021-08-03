<script>
  export let appTitle;
  export let appIcon;
  export let appNavLinks;
  let currentNav = window.location.hash;
  function updateWindowLocation() {
    currentNav = window.location.hash;
  }
</script>
<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #373737;

    padding: 1em;
  }
  h2 {
    margin: 0;
  }
  li {
    list-style: none;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: pointer;
    transition: color 200ms;
    margin: 0 0.1em;
  }
  li:hover {
    color: #40b3ff;
  }
  ul {
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 2;
    padding: 0;
  }
  figure {
    margin: 0;
    display: flex;
    flex: 1;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .link.is-active {
    color: #40b3ff;
  }
</style>
<header>
  <figure>
    <img src={appIcon} alt="" />
    <h2>{appTitle}</h2>
  </figure>
  <ul>
  {#each appNavLinks as navItem, index}
    <li class={currentNav===navItem.link ? "link is-active": "link"}>
      <a href={navItem.link}>
        {navItem.name}
      </a>
      </li>
  {/each}
  </ul>
</header>
<svelte:window on:hashchange={updateWindowLocation}></svelte:window>