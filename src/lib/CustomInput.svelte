<script>
  export let answer;
  let input = "";

  function submit() {
    if(input != "") {
      answer = input; 
    } else {
      alert("must enter answer value before starting game")
    }
  }
</script>

<div class="grid w-3/4 mx-auto gap-4">
  <input type="text" bind:value={input} placeholder="enter answer here" class="p-4 border-gray-200 border-2 focus:border-black"/>
  <button on:click={submit} class="text-white bg-green-600 py-2 px-8 hover:bg-green-700 rounded text-lg">Start Game</button>
</div>