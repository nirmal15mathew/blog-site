<script>
  import CustomLoginForm from "../components/CustomLoginForm.svelte";
  import PostEditor from "../components/PostEditor.svelte";
  import PostManager from "../components/PostManager.svelte";
  import Tabs from "../components/Tabs.svelte";
  import supabase from "../src/supabaseClient";
  import ID from "../src/randomId";
  import { onMount, setContext } from "svelte";
  let postsData = {};
  $: {
    setContext("postsData", postsData);
  }
  // manage admin login
  let userLoggedIn = false;
  function changeState() {
    userLoggedIn = !userLoggedIn;
  }
  // get list of all blog posts from database
  async function getPostData() {
    const { data: posts, error } = await supabase.from("posts").select("*");
    postsData = posts;
  }

  // creates a sample post, for testing purposes
  function generateSamplePost() {
    let postData = {
      title: "sample post" + Math.random(),
      createdAt: new Date(),
      "cover-img": "",
      "post-content": "",
      category: "Culture",
      postId: ID() // generates a random id with base 36
    };
    return postData;
  }
  // uploads any created post to the database
  async function addPost(postInfo) {
    const { data, error } = await supabase
      .from("posts")
      .insert([generateSamplePost()]);

    console.log(data, error);
  }

  // when the component is first mounted, fetches list of posts
  onMount(async () => {
    await getPostData();
  });

  let navList = [
    {
      title: "Create Post",
      component: PostEditor
    },
    {
      title: "Manage Posts",
      component: PostManager
    }
  ];
</script>
<style>
  main {
    padding: 1em;
  }
</style>
<main>
  {#if userLoggedIn}
    <Tabs {navList}/>
  {:else}
    <CustomLoginForm {changeState}/>
  {/if}
</main>