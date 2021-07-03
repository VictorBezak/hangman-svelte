<script lang="ts">
  import Router from 'svelte-spa-router';
  import routes from './routes';
  import TailwindCSS from './TailwindCSS.svelte'
  import GlobalCSS from './GlobalCSS.svelte'
  import Header from './lib/Header.svelte'
</script>

<svelte:head>
  <title>Hangman</title>
  <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans" rel="stylesheet">
</svelte:head>

<Header/>

<Router {routes}/>
