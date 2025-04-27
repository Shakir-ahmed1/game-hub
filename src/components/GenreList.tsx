import React from 'react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const { isLoading, error, genres} = useGenres();
  return (
    <div>
        <ul>
            {genres.map(genre=> {
                return <li key={genre.id}>{genre.name}</li>
            })}
        </ul>

    </div>
  )
}

export default GenreList