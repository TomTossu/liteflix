'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FILTERS } from '@/constants/constants'

export const FilterDropdown = ({ selectedFilter, setSelectedFilter }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='w-full relative inline-block text-left z-10 lg:w-[300px]'>
                <button className='flex justify-center items-center w-full gap-3 px-4 py-2'
                    onClick={() => setIsOpen(!isOpen)}>
                    Ver: <b>{selectedFilter}</b>
                    <Image
                        src="/icons/arrow.svg"
                        alt="select category"
                        width={14}
                        height={14}
                        className="w-auto h-auto"
                    />
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className='flex flex-col w-full absolute shadow-lg shadow-gray-900'>
                            <button className={`flex items-center justify-between py-4 px-6 ${selectedFilter === FILTERS.POPULAR ? 'bg-gray-600' : 'bg-secondary hover:bg-gray-700'}`}
                                onClick={() => setSelectedFilter(FILTERS.POPULAR)}>
                                {FILTERS.POPULAR}
                                {selectedFilter === FILTERS.POPULAR && (
                                    <Image src="/icons/check.svg" alt="choosen filter"
                                        width={14} height={14}
                                        className="w-auto h-auto"
                                    />
                                )}
                            </button>
                            <button className={`flex items-center justify-between py-4 px-6 ${selectedFilter === FILTERS.MY_MOVIES ? 'bg-gray-600' : 'bg-secondary hover:bg-gray-700'}`}
                                onClick={() => setSelectedFilter(FILTERS.MY_MOVIES)}>
                                {FILTERS.MY_MOVIES}
                                {selectedFilter === FILTERS.MY_MOVIES && (
                                    <Image src="/icons/check.svg" alt="choosen filter"
                                        width={14} height={14}
                                        className="w-auto h-auto" />
                                )}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    )
}
