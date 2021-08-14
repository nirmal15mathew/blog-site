<script>
  export let contentsList;
</script>
<style>
  .Content-Area__PostList {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
</style>
<section>
  <ul class="Content-Area__PostList">
    {#each contentsList as post,index}
      <li class="Content-Area__PostItem">{post.name}</li>
    {/each}
  </ul>
</section>