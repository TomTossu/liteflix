'use client'
import Image from 'next/image'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const FeaturedMovie = ({ featuredMovie }) => {

    return (
        <AnimatePresence>
            <section className='flex flex-col items-center gap-4 h-full w-full max-w-7xl mx-auto lg:justify-center lg:items-start lg:px-6'>
                <article className='flex flex-col justify-end items-center w-full lg:items-start'>
                    <motion.h2
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: '0%', opacity: 1 }}
                        transition={{ delay: 0.3, ease: "easeIn" }}
                        className='text-xl'>Original de <b>Liteflix</b></motion.h2>
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: '0%', opacity: 1 }}
                        transition={{ delay: 0.3, ease: "easeIn" }}
                        className='text-primary text-7xl w-full text-center lg:text-[120px] lg:text-left'>{featuredMovie.title}</motion.h1>
                </article>
                <div className='flex flex-col gap-6 lg:flex-row'>
                    <motion.button
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: '0%', opacity: 1 }}
                        transition={{ delay: 0.4, ease: "easeIn" }}
                        className='flex flex-row justify-center items-center gap-3 w-[248px] h-[54px] text-lg bg-secondary focus:bg-gray-900/75 hover:bg-gray-900/75'>
                        <Image
                            src="/play.svg"
                            alt="play movie"
                            width={14}
                            height={14}
                            className="w-auto h-auto"
                        />
                        Reproducir
                    </motion.button>
                    <motion.button
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: '0%', opacity: 1 }}
                        transition={{ delay: 0.3, ease: "easeIn" }}
                        className='flex flex-row justify-center items-center gap-3 w-[248px] h-[54px] text-lg bg-secondary/50 border border-white focus:bg-gray-900/75 hover:bg-gray-900/75'>
                        <Image
                            src="/plus.svg"
                            alt="my list"
                            width={14}
                            height={14}
                            className="w-auto h-auto"
                        />
                        Mi Lista
                    </motion.button>
                </div>
            </section>
        </AnimatePresence>
    )
}
