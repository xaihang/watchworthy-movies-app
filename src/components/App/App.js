import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import SearchMovie from '../SearchMovie/SearchMovie';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>     
      <Route path="/" exact>
          <SearchMovie />
        </Route>   
        <Route path="/movielist">
          <MovieList />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
