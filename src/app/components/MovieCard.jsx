'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FILTERS, IMAGE_URL } from '@/constants/constants'

export const MovieCard = ({ movie, selectedFilter, index }) => {
    const [isMovieHovered, setMovieHovered] = useState(false)

    const handleMovieHover = (value) => {
        setMovieHovered(value)
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: `${index * 0.2}` }}
                className={`flex flex-col justify-center h-44 w-80 gap-4 ${isMovieHovered ? 'bg-black cursor-pointer' : 'bg-gradient-to-b from-neutral-100 via-gray-900 to-black'} rounded-lg lg:w-56 lg:h-36 lg:min-h-[9rem] relative`}
                onMouseOver={() => handleMovieHover(true)} onMouseOut={() => handleMovieHover(false)}>
                <Image
                    src={selectedFilter === FILTERS.MY_MOVIES ? movie?.backdrop_path : `${IMAGE_URL}${movie?.backdrop_path}`}
                    alt={movie?.title || "Movie title"}
                    priority
                    fill
                    className='rounded-lg opacity-60'
                />
                {isMovieHovered ? (
                    <div className='flex flex-col justify-end h-full relative gap-4 pb-2'>
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='flex justify-start items-center text-center gap-4 pl-3'>
                            <div className='w-8 h-8 relative border-2 border-white rounded-full bg-gray-900/50 hover:bg-primary'>
                                <Image
                                    src="/icons/play.svg"
                                    alt="play movie"
                                    width={14}
                                    height={14}
                                    className="w-auto h-auto relative top-[25%] left-[30%]"
                                />
                            </div>
                            <h3 className='max-w-[9rem]'>{movie?.title}</h3>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='flex justify-between items-center px-3'>
                            <div className='flex flex-row gap-2'>
                                <Image
                                    src="/icons/star.svg"
                                    alt="movie rating"
                                    width={14}
                                    height={14}
                                    className="w-auto h-auto relative"
                                />
                                <h3>{movie?.vote_average}</h3>
                            </div>

                            <h3>{new Date(movie?.release_date).getFullYear()}</h3>
                        </motion.div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='flex flex-col justify-center items-center text-center gap-4'>
                        <div className='w-10 h-10 relative border-2 border-white rounded-full bg-gray-900/50 hover:bg-primary'>
                            <Image
                                src="/icons/play.svg"
                                alt="play movie"
                                width={14}
                                height={14}
                                className="w-auto h-auto relative top-[30%] left-[35%]"
                            />
                        </div>
                        <h3 className='relative'>{movie?.title}</h3>
                    </motion.div>
                )}
            </motion.div >
        </AnimatePresence>
    )
}
