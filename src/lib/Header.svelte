<script>
  import { onMount } from 'svelte';
  import logo from '../assets/male-solid.svg';

  onMount(() => {
    document.getElementById("logo")
      .addEventListener("click", () => location.reload());
  })
</script>

<header class="container absolute p-5 flex flex-col items-center md:flex-row">
  <a id="logo" href="/#" class="text-gray-700 flex items-center lg:w-1/5 lg:justify-center">
    <div class="flex items-end">
      <span class="text-xl">Hang</span>
      <img src={logo} alt="Hangman Logo" class="w-2 ml-1" />
    </div>
  </a>
</header>

<style>
  header {
    left: 50%;
    transform: translateX(-50%);
  }
</style>