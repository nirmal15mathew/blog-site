<script>
	import ID from "../src/randomId.js";
	import supabase from "../src/supabaseClient.js";
	let titleInput = "Untitled";
	let postContentInput = "Write something here...";
	let createdAt = new Date();
	let postInfo = {};
	let doneButtonLoading = false;
	let categorySelected = "";
	let coverImg = "";
	function setPostInfo() {
	  postInfo = {
	    title: titleInput,
	    createdAt: createdAt,
	    "post-content": postContentInput,
	    "cover-img": coverImg,
	    category: categorySelected,
	    postId: ID()
	  };
	  doneButtonLoading = true;
	  uploadPost();
	}
	async function uploadPost(postData) {
	  const { data, error } = await supabase.from("posts").insert([postInfo]);
	  if (data) {
	    doneButtonLoading = false;
	  }
	}
</script>
<style>
	h3,
	p {
	  padding: 0.5em;
	  outline: 0;
	}
	p {
	  height: 50vh;
	}
	h3 {
	  border-bottom: 2px solid #ccc;
	}
	h3:focus {
	  border-color: #dab;
	}
	input,
	select {
	  border: 0;
	  background-color: rgba(0, 0, 0, 0.1);
	  padding: 0.5em;
	  border-radius: 0.4em;
	}
</style>
<article>
  <h3 contenteditable="true" bind:innerHTML={titleInput}></h3>
	<select bind:value={categorySelected}>
		<option>Culture</option>
		<option>Sports</option>
		<option>Politics</option>
	</select>
	<input type="url" placeholder="add cover image url" bind:value={coverImg}>
  <p contenteditable="true" bind:innerHTML={postContentInput} aria-placeholder="Article Content"></p>
	<button class="done-btn" on:click={setPostInfo(titleInput, postContentInput, "")} disabled={doneButtonLoading}>
		Done
	</button>
</article>