// Components
import Home from './routes/Home.svelte'
import OfflineSetup from './routes/OfflineSetup.svelte'
import OnlineSetup from './routes/OnlineSetup.svelte'
import Game from './routes/Game.svelte'
import NotFound from './routes/NotFound.svelte'

// Export the route definition object
export default {
  '/': Home,
  '/offline/setup': OfflineSetup,
  '/online/setup': OnlineSetup,
  '/game': Game,

  '*': NotFound // Catch-all, must be last
}
