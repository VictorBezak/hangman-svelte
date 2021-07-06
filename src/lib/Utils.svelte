<script context="module">
	export function uniqueLetters(value) {
		let unique = new Set(value);
		unique.delete(" ");
		return unique;
	}
</script>