<script>
	export let answer;
</script>

<section id="answer-spaces" class="flex mt-6">
	{#each answer as letter}
		{#if letter == " "}
			<div class="p-2 mx-1"></div>
		{:else}
			<div class="p-2 mx-1 border-b-2 border-black">{letter.toUpperCase()}</div>
		{/if}
	{/each}
</section>