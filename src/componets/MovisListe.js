
import React from 'react'

import MoviesCard from './MoviesCard'
import AddMovies from './AddMovies';

import { useState } from 'react';

const MovisListe = ({movies , addMovies}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <button onClick={handleShow} >add movies</button><br/>
      {movies.map((el,i) => (
    <MoviesCard movis={el} key={i}/>
    ))}
        <AddMovies handleClose={handleClose} show={show} addMovies={addMovies}/>

    </div>
  )
}

export default MovisListe