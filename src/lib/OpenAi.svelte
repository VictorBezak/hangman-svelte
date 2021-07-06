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
    promise = askBot(input)
    promise.then((val)=>{
      answer = bestChoice(val.data.choices);
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
    <h2 class="text-gray-900 text-lg font-bold title-font mb-5">Enter a theme and get an AI generated answer</h2>
    <div class="relative mb-4">
      <input bind:value={input} type="text" id="theme" name="theme" placeholder="type theme here" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
    </div>
    <button on:click={submit} class="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">Start Game</button>
    <p class="text-xs text-gray-500 mt-3">*developer not responsible for AI generated results*</p>
  </div>
</section>
