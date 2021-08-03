<script>
  import { getRelativeTime } from "../src/relativeTime";
  import Time from "svelte-time";
  export let postInfo = {
    title: "",
    coverImg: "",
    postId: "",
    createdAt: ""
  };
</script>
<style>
	* {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}
	a {
	  margin: 0.2em;
	}
	.container {
	  --w: calc(0.2045 * 100vw);
	  --h: calc(0.5997 * 100vh);
	  background-repeat: no-repeat;
	  background-position: center;
	  background-size: cover;
	  width: var(--w);
	  height: var(--h);
	  position: relative;
	  transition: box-shadow 200ms;
	  border: 3px solid #ccc;
	  min-width: 170px;
	  border-radius: 0.5em;
	}
	.container:hover {
	  box-shadow: 0 0 20px rgba(0, 0, 0, 0.315);
	}
	.container .container__info {
	  position: absolute;
	  right: 0;
	  left: 0;
	  bottom: 20%;
	  display: flex;
	  align-items: flex-end;
	  padding: 15px 30px;
	  color: #fff;
	}
	.container .container__info span {
	  margin-right: 20px;
	}
	.container .container__profile {
	  background-color: #fefefe;
	  display: flex;
	  align-items: center;
	  padding: 0.7em;
	  position: absolute;
	  right: 0;
	  left: 0;
	  bottom: 0;
	}
	.container .container__profile h2 {
	  color: #334454;
	  font-size: 1.2rem;
	}
	.container .container__profile p {
	  color: #a1b2bc;
	  font-size: 0.8rem;
	}
	.container .container__profile p b {
	  font-style: italic;
	}
	h2 {
	  overflow: hidden;
	  white-space: normal;
	  text-overflow: ellipsis;
	  width: var(--w);
	}
</style>
<a class="Post-Link__Container" href={`#/posts/${postInfo.postId}`}>
  <div class="container" style={`background-image: url(${postInfo['cover-img']}`}>
   <div class="container__info">
    <span></span>
   </div>
   <div class="container__profile">
    
    <div class="container__profile__text">
     <h2>{postInfo.title}</h2>
     <p>uploaded <b><Time relative timestamp={postInfo.createdAt}></Time></b></p>
    </div>
   </div>
  </div>
</a>