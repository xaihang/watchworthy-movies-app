import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import SearchMovie from '../SearchMovie/SearchMovie';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';
import Header from '../MaterialUI/Header';

function App() {
  return (
    <div>
      <Header />
      <Router>   
        <SearchMovie />  
      <Route path="/" exact>
          <MovieList />
        </Route>   
        <Route path="/movielist">
          <MovieList />
        </Route>
        {/* Details page */}
        <Route path="/details/:id">
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route path="/addmovie">
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
