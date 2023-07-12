'use client'
import React, { useEffect, useState } from 'react'
import { FilterDropdown } from './FilterDropdown'
import { MovieCard } from './MovieCard'
// import { getMyMovies } from '@/movies/api'

export const FILTERS = {
    POPULAR: "POPULARES",
    MY_MOVIES: "MIS PELICULAS"
}

export const MovieList = ({ popularMovies, myMovies, className }) => {
    const [selectedFilter, setSelectedFilter] = useState(FILTERS.POPULAR)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        switch (selectedFilter) {
            case FILTERS.POPULAR:
                setMovies(popularMovies)
                break;
            case FILTERS.MY_MOVIES:
                setMovies(myMovies)
                break;
            default:
                setMovies(popularMovies)
                break;
        }
    }, [selectedFilter])

    return (
        <div className='overflow-hidden lg:w-[27rem]'>
            <div className={`flex flex-col justify-start items-center h-full py-6 gap-4 overflow-y-auto overflow-x-hidden lg:h-[37rem] lg:w-[21rem] ${className}`}>
                <FilterDropdown selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
                {movies?.map((movie, index) => (
                    <MovieCard key={movie.id} movie={movie} selectedFilter={selectedFilter} index={index} />
                ))
                }
            </div>
        </div>
    )
}
