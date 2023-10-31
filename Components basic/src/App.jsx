import MovieList from './components/MovieList';
import movies from './assets/movies';
import './App.css'



function App() {

  return (
    <>
      <h1>My first React app</h1>
      <MovieList movies={movies} headingText="Movies" />
    </>
  )
}

export default App
