import MovieList from './components/MovieList';
import movies from './assets/movies';
import './App.css'
import Timer from './components/Timer';
import Counter from './components/Counter';



function App() {

  return (
    <>
      <h1>My first React app</h1>

      <Timer startTime={5}/>
      <Timer startTime={10}/>
      <Timer startTime={15}/>
       <Counter />
      <MovieList movies={movies} headingText="Movies" />
    </>
  )
}

export default App
