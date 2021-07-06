<script>
	export let answer = "";
	let answerRows = 0;
	let charsOnRow = 0;
	let charsPerRow = [[]];

	answer.split("").forEach((letter, i) => {
		if (letter == " " && charsOnRow > 10) {
			charsPerRow.push([]);
			answerRows += 1;
			charsOnRow = 0;
		} else {
			charsPerRow[answerRows].push(letter)
			charsOnRow += 1;
		}
	})
</script>

<section id="answer-spaces" class="grid">
	{#each charsPerRow as row}
		<div class="flex my-3">
			{#each row as letter}
				{#if letter == " "}
					<div class="p-2 mx-1"></div>
				{:else}
					<div class="p-2 mx-1 border-b-2 border-black">{letter.toUpperCase()}</div>
				{/if}
			{/each}
		</div>
	{/each}
</section>