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

<!-- <div class="grid w-3/4 mx-auto gap-4">
  <input type="text" bind:value={input} placeholder="enter answer here" class="p-4 border-gray-200 border-2 focus:border-black"/>
  <button on:click={submit} class="text-white bg-green-600 py-2 px-8 hover:bg-green-700 rounded text-lg">Start Game</button>
</div> -->

<section class="container mx-auto px-5 py-36 flex flex-wrap items-center justify-center">
  
  <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full">
    <h2 class="text-gray-900 text-lg font-bold title-font mb-5">Enter the winning answer</h2>
    <div class="relative mb-4">
      <input bind:value={input} type="text" id="theme" name="theme" placeholder="type answer here" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
    </div>
    <button on:click={submit} class="text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">Start Game</button>
  </div>

</section>