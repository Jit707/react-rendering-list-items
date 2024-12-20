import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <div>Movie List Section</div>
        <div>
        {movies.map((item, index) => (
            <div  className="movieBox" key={index}>
              <div>Title : {item.title}</div>
              <div>Year : {item.year}</div>
              <div>Runtime : {item.runtime}</div>
              <div>Director : {item.director}</div>
              <div>Genres : {item.genres}</div>
              <div>imdbRating : {item.imdbRating}</div>
              <div>imdbVotes : {item.imdbVotes}</div>
              <div  >
                <img  className="photo" src={item.image}></img>
               
              </div>            
            </div>
          ))}
         </div>
      </section>
    </div>
  );
}

export default App;
