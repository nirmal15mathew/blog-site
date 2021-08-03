<script>
  import SharePanel from "../components/SharePanel.svelte";
  import supabase from "../src/supabaseClient";
  import Time from "svelte-time";
  export let params = {};
  let postInfoL = {};

  // to fetch the post data from server
  async function getPostData() {
    const { data: postInfo, error } = await supabase
      .from("posts")
      .select("*")
      .match({ postId: params.postId });
    postInfoL = postInfo[0];
  }
</script>
<style>
  article {
    padding: 1em;
  }

  p {
    line-height: 1.5em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  img.cover-image {
    width: 100%;
  }
</style>
<article>
  {#await getPostData()}
    <p>Loading...</p>
  {:then val}
    <img src={postInfoL['cover-img']} alt="cover img" class="cover-image">
    <h2>{@html postInfoL.title}</h2> - 
    <i><Time relative timestamp={postInfoL.createdAt}></Time></i>
    <p>{@html postInfoL['post-content']}</p>
    <SharePanel 
    linkTo={postInfoL.title + " https://pkw79.csb.app/#/posts/"+postInfoL.postId}
    >
    </SharePanel>
  {/await}
</article>