<script>
  import Game from '../lib/Game.svelte';
  import CustomInput from '../lib/CustomInput.svelte';
  import OpenAi from '../lib/OpenAi.svelte';
  let customInput;
  let answer;
</script>

{#if answer}
    <Game {answer}/>
{:else}
  <main class="h-screen grid items-center">
    {#if customInput === undefined}
      <div class="grid w-3/4 mx-auto gap-4">
        <button on:click={() => customInput = true} class="text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">Custom Answer</button>
        <button on:click={() => customInput = false} class="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">AI Answer</button>
      </div>
    {:else if customInput}
      <CustomInput bind:answer/>
    {:else if !customInput}
      <OpenAi bind:answer/>
    {/if}
  </main>
{/if}