<script>
  export let guessesRemaining;
	let bank = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

  function selectLetter(e) {
		e.target.disabled=true;
		e.target.style.opacity = 0.2;
    e.target.style.cursor = "default";
    guessesRemaining -= 1;
	}
</script>

<section id="letter-bank" class="grid grid-cols-7 max-w-lg mb-10">
	{#each bank as letter}
		<button on:click|once={selectLetter} class="border-2 border-solid p-2 bg-white">{letter}</button>
	{/each}
</section>
