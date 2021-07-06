<script>
  import OpenAi from 'openai-api';
  export let answer;
  
  const API_KEY = 'sk-X7ZfhjrYtXiRqJZflLYZwcM9EqunebS9SWN5ZDGg';
  const openai = new OpenAi(API_KEY);

  let input;
  let completionPrompt = `
  The Human will provide a theme, and then the AI will provide a short phrase that belongs to that theme.

  Human: halloween
  AI: trick or treat

  Human: halloween
  AI:  ghosts are spooky

  Human: the beach
  AI: watch out for sharks

  Human: the beach
  AI: lets build a sand castle

  Human: `;

  let promise;

  async function askBot(theme) {
    console.log(theme)
    
    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt: updatePrompt(theme),
      maxTokens: 15,
      temperature: 0.9,
      topP: 1,
      presencePenalty: 0,
      frequencyPenalty: 0.2,
      bestOf: 3,
      n: 3,
      stream: false,
      stop: ['\n']
    })

    console.log(gptResponse.data.choices)
    return gptResponse;
  }

  function updatePrompt(userTheme) {
    return completionPrompt + `${userTheme}\n  AI: `;
  }

  function submit() {
    promise.then((val)=>{
      answer = bestChoice(val.data.choices);
      // answer = val.data.choices[0].text;
      console.log(answer)
    });
  }

  function bestChoice(choices) {
    /* Remove special characters "_", ",", and "'" from text and trim extra whitespace.
    Then return the longest of the api completion choices.
    */
    console.log("choices:", choices);

    let cleanedChoices = choices.map(choice => choice.text.replaceAll(/\_|,|'/g, "").trim());
    console.log(`cleanedChoices: ${cleanedChoices}`)
    let longestChoice = cleanedChoices.reduce((carried, current) => {
      return carried.length > current.length ? carried : current; 
    });
    console.log(`longestChoice: ${longestChoice}`);

    return longestChoice;
  }
</script>

<section class="container mx-auto px-5 py-36 flex flex-wrap items-center justify-center">
  
  <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full">
    <h2 class="text-gray-900 text-lg font-bold title-font mb-5">Enter a theme and get an AI generated prompt.</h2>
    <div class="relative mb-4">
      <input bind:value={input} type="text" id="theme" name="theme" placeholder="type theme here" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
    </div>
    <button on:click={() => promise = askBot(input)} class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Generate Prompt</button>
    <p class="text-xs text-gray-500 mt-3">*developer not responsible for AI generated results*</p>
  </div>

  <div class="grid">
    <div class="border-solid border-2 border-blue-500 p-10 rounded-lg">
      {#if promise}
        {#await promise}
          <p>waiting for bot...</p>
        {:then res}
          <p class="title-font font-medium text-2xl text-blue-600">{res.data.choices[0].text}</p>
        {:catch error}
          <p style="color: red">{error.message}</p>
        {/await}
      {:else}
        <p class="text-gray-400 text-center">(prompt will appear here)</p>
      {/if}
    </div>
    <button on:click={submit} class="bg-white px-8 py-2 border-solid border-2">Accept Prompt</button>
  </div>
</section>
