'use client'
import React, { useEffect, useState } from 'react'
import { FilterDropdown } from './FilterDropdown'
import { MovieCard } from './MovieCard'
import { getMyMovies } from '@/movies/api'
import { FILTERS } from '@/constants/constants'
import { useMovies } from '@/store'

export const MovieList = ({ popularMovies, className }) => {
    const [selectedFilter, setSelectedFilter] = useState(FILTERS.POPULAR)
    const myMovies = useMovies(state => state.myMovies)
    const setMyMovies = useMovies(state => state.setMyMovies)

    useEffect(() => {
        const getMovies = getMyMovies();
        setMyMovies(getMovies)
    }, [])

    const movies = {
        [FILTERS.POPULAR]: popularMovies,
        [FILTERS.MY_MOVIES]: myMovies,
    }

    return (
        <div className='overflow-hidden lg:w-[27rem]'>
            <div className={`flex flex-col justify-start items-center h-full gap-4 py-6 overflow-y-auto overflow-x-hidden lg:h-[37rem] lg:w-[21rem] ${className}`}>
                <FilterDropdown selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
                {movies && movies[selectedFilter]?.map((movie, index) => (
                    <MovieCard key={movie.id} movie={movie} selectedFilter={selectedFilter} index={index} />
                ))
                }
            </div>
        </div>
    )
}
