<script>
  import supabase from "../src/supabaseClient";
  import PostLink from "../components/PostLink.svelte";
  let postList = [];
  async function getInfo() {
    let { data: post, error } = await supabase
      .from("posts")
      .select("title, createdAt, postId, cover-img")
      .match({ category: "Sports" });
    postList = [...postList, post];
  }
</script>
<style>
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  h2 {
    margin: 0.4em;
  }
</style>
<section>
  <h2>Sports</h2>
  {#await getInfo()}
  <p>loading...</p>
  {:then val}
    <ul>
      {#each postList[0] as post, indx}
      <PostLink postInfo={post}></PostLink>
    {/each}
    </ul>
  {/await}
</section>