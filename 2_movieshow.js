import React from 'react';

const movies = [
    {
        'title': 'ABC',
        'cast': ['Someone, another one and yet another one']
    },
    {
        'title': 'BCA',
        'cast': ['A person, B person']
    },
    {
        'title': 'CBB',
        'cast': ['C person', 'D person', 'E person']
    }
]

const MovieShow = (
    <div>
        {movies.map(movie => <Movie movie={movie} />)}
    </div>
)

const Movie = movie => (
    <div>
        <h1>{movie.title}</h1>
        <ul>
            {movie.cast.map(cast => <li>{cast}</li>)}
        </ul>
    </div>
)