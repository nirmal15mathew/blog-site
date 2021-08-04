<script>
  import Header from "./components/Header.svelte";
  import Home from "./components/Home.svelte";
  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";

  const navLinks = [
    {
      name: "Sports",
      link: "#/sports"
    },
    {
      name: "Culture",
      link: "#/culture"
    },
    {
      name: "Politics",
      link: "#/politics"
    },
    {
      name: "About",
      link: "#/"
    }
  ];
  const routes = {
    "/": Home,
    "/culture": wrap({
      asyncComponent: () => import("./pages/Culture.svelte")
    }),
    "/sports": wrap({
      asyncComponent: () => import("./pages/Sports.svelte")
    }),
    "/politics": wrap({
      asyncComponent: () => import("./pages/Politics.svelte")
    }),
    "/posts/:postId": wrap({
      asyncComponent: () => import("./pages/PostViewer.svelte")
    }),
    "/admin/create": wrap({
      asyncComponent: () => import("./pages/PostCreator.svelte")
    }),
    "*": wrap({
      asyncComponent: () => import("./pages/PageNotFound.svelte")
    })
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");
  main {
    font-family: "Overpass", sans-serif;
  }
  * {
    --dark-color: #283d3b;
    --green: #197278;
    --light-color: #edddd4;
    --orange-red: #c44536;
    --liver-organ: #772e25;
    --dark-blue: #0a2342;
    color: #373737;
  }
</style>
<main>
  <Header appTitle="App" appNavLinks={navLinks} appIcon=""/>
  <Router {routes} />
</main>