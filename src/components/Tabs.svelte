<script>
	export let navList = Array(0);
	let activeNavInd = 0;
	import SharePanel from "./SharePanel.svelte";

	function changeActiveNav(ind) {
	  activeNavInd = ind;
	}
	console.log(navList);
</script>
<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
  }

  span {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  span:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
  }

  li.active > span {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    z-index: 999;
  }
</style>
<nav>
	<ul>
		{#each navList as navItem,inx}
			<li class={inx === activeNavInd ? "active" : ""} on:click={() => changeActiveNav(inx)}>
				<span>{navItem.title}</span>
		</li>
		{/each}
	</ul>
	<main>
		{#each navList as navItem,inx}
			{#if inx === activeNavInd}
				<svelte:component this={navItem.component}></svelte:component>
			{/if}
		{/each}
	</main>
</nav>