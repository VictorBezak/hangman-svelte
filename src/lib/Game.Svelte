<script>
	import { uniqueLetters } from './Utils.svelte';
	import Hangman from './Hangman.svelte'
	import AnswerSpaces from './AnswerSpaces.svelte'
	import LetterBank from './LetterBank.svelte'
	
	export let answer = "";
	let toGuess = uniqueLetters(answer);
  let guessesRemaining = 9;

  function resetGame() {
    guessesRemaining = 9;
  }
</script>

<main class="container h-screen mx-auto grid place-items-center">
  <Hangman {guessesRemaining}/>

  <AnswerSpaces {answer}/>
  
  {#if guessesRemaining == 0}
    <button on:click={resetGame} class="text-white bg-indigo-600 py-2 px-8 hover:bg-indigo-700 rounded text-lg">RESET GAME</button>
  {:else}
    <LetterBank bind:guessesRemaining/>
  {/if}
</main>

<style>
  main {
    grid-template-rows: 1fr auto auto 1fr;
  }
</style>
