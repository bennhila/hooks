import React, { useState } from 'react';
import './App.css';
import MovieSearch from './componets/MovieSearch';
import MovisListe from './componets/MovisListe';

function App() {

   // eslint-disable-next-line no-unused-vars
   const [movies, setMovies] = useState([ 
      {
    title:"Double Threat",
    date:"2022",
    rate:"3",
    description:"With ruthless mobsters on her tail a young woman with a split personality becomes entangled with a man on a pilgrimage across the country to scatter his brother Is ashes",
    img:"https://i.egycdn.com/pic/WmFwZndlY21tbWJ2Y3ZjdmNtTGNFY21tdlVMY212eG1JeA.jpg",
  },
  {title:"Superman and Lois",
    date:"2021",
    rate:"5",
    description:"The work deals with the story of the most famous superhero on earth, his marital relationship with the most famous journalist in the world, and the pressures and complications that the duo are going through in their lives as parents in the current era.",
    img:"https://i.egycdn.com/pic/WmFwZndlY21ZRW1UWXZ2TmVjUHdUSWFtcGJ2Y21i.jpg",
  },
  {title:"No Exit",
    date:"2022",
    rate:"4",
    description:"During a snowstorm a college student is forced to stay in an isolated break on the highway in the mountains when she discovers a kidnapped child is trapped inside someone is car inside the lounge.",
    img:"https://i.egycdn.com/pic/WmFwZndlY21tdk5qbXBMdFJjYW1qbWJtYm12dmNtWUU.jpg",
  },
   {title:"Trip ",
    date:"2022",
    rate:"2",
    description:"After her daughters commit suicide, a stricken mother is visited by an unorthodox healer who delivers a hallucinogenic drug that allows communication with the dead desperate to understand the psychology of her daughters.",
    img:"https://eegybest.life/wp-content/uploads/2022/05/l0Ytmevts7TZTRaJuiTJixLNHmj-185x278.jpg",
  },
  // console.log()

]);
const addMovies=(movie)=>{
setMovies(movies.concat(movie));
};

const [keyWord, setKeyWord] = useState("")
const [keyRate, setKeyRate] = useState(0)


  return (
    <div className="App"> 
      <MovieSearch setKeyWord={setKeyWord} keyRate={keyRate} keyWord={keyWord} setKeyRate={setKeyRate}/>
      <MovisListe addMovies={addMovies} movies={movies.filter((m) =>
        m.title.toLowerCase().includes(keyWord.toLowerCase().trim()) && m.rate >= keyRate
      )} />
    </div>
  );
}
export default App;


