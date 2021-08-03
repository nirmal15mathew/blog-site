<script>
  import { getContext } from "svelte";
  let postsData = getContext("postsData");
</script>
<style>
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    max-height: 500px;
    overflow: scroll;
    padding: 0;
  }
  li {
    padding: 0.3em;
    cursor: context-menu;
  }
  li:hover {
    background: rgba(0, 0, 0, 0.2);
  }
</style>
<ul class="posts-list">
	{#await postsData}
	<p>Loading Posts....</p>
	{:then val}
	{#each val as post, ind}
	<li>{post.title}</li>
	{/each}
	{/await}
</ul>