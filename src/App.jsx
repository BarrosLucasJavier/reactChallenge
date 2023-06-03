import PokemonGallery from "./components/containers/pokemonGallery"
import Controls from "./components/pure/controls/controls"
import { PokemonProvider } from "./context/pokemon.context"
import './app.css'
import pika from './assets/pikachu.webp'
import hunter from './assets/hunter.png'
import Header from "./components/pure/header/Header"
function App() {

  return (
    <div className="body">
      <PokemonProvider>
        <Header/>
        <h1>Galeria</h1>
        <Controls/>
        <img className="pika" src={pika}/>
        <img className="hunter" src={hunter}/>
        <PokemonGallery></PokemonGallery>
      </PokemonProvider>
    </div>
  )
}

export default App
