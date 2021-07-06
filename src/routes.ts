// Components
import Home from './routes/Home.svelte'
import Game from './routes/Game.svelte'
import NotFound from './routes/NotFound.svelte'

// Export the route definition object
export default {
  '/': Home,
  '/game': Game,

  '*': NotFound // Catch-all, must be last
}
