'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Modal } from './Modal'
import { motion, AnimatePresence } from 'framer-motion'

export const NavItems = {
    HOME: { label: 'Inicio', href: '/' },
    SERIES: { label: 'Series', href: '/' },
    MOVIES: { label: 'Peliculas', href: '/' },
    RECENTLY_ADDED: { label: 'Agregadas Recientemente', href: '/' },
    POPULAR: { label: 'Populares', href: '/' },
    MY_MOVIES: { label: 'Mis Peliculas', href: '/' },
    MY_LIST: { label: 'Mi Lista', href: '/' },
    ADD_MOVIE: { label: 'Agregar Pelicula', href: '/', modalNav: true },
    LOG_OUT: { label: 'Cerrar Sesión', href: '/' },
}

export const Menu = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <button className='flex items-center gap-3'
                onClick={() => setShowMenu(true)}
            >{children}</button>
            <AnimatePresence>
                {showMenu && (
                    <div className='h-full w-full overflow-y-hidden overflow-x-hidden fixed inset-0 z-50 bg-gray-900/70 lg:overflow-y-auto'>
                        <motion.div
                            initial={{ x: 40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 40, opacity: 0 }}
                            transition={{ ease: "easeInOut" }}

                            className={`h-full p-6 bg-secondary lg:w-[35%] lg:absolute lg:py-6 lg:px-12 lg:right-0 `} >
                            <header className='flex justify-between w-full gap-10'>
                                <Image
                                    src="/plus.svg"
                                    alt="Close Menu"
                                    width={30}
                                    height={30}
                                    className="rotate-45 cursor-pointer transition-transform ease-in-out hover:scale-125"
                                    onClick={() => setShowMenu(false)}
                                />
                                <div className='flex justify-center w-full lg:justify-end'>
                                    <button className='hidden lg:flex'>
                                        <Image
                                            src="/notification.svg"
                                            alt='notification icon'
                                            width={24}
                                            height={24}
                                            className='self-center transition-transform ease-in-out hover:scale-125'
                                        />
                                    </button>
                                    <Image
                                        src="/logo.svg"
                                        alt="Liteflix"
                                        width={98}
                                        height={28}
                                        className="self-center lg:hidden"
                                    />
                                </div>
                                <button>
                                    <Image src="/avatar.svg" alt="Profile" width={45} height={45} className='transition-transform ease-in-out hover:scale-125' />
                                </button>
                            </header>
                            <nav className='py-14 px-1'>
                                <ul className='flex flex-col gap-7 text-left text-lg'>
                                    {Object.values(NavItems).map(((obj, index) => (
                                        <motion.li key={obj.label}
                                            initial={{ y: 80, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: `${index * 0.05}` }}
                                        >
                                            <>
                                                {obj.modalNav ? (
                                                    <Modal>
                                                        <Image
                                                            src="/plus.svg"
                                                            alt="add movie"
                                                            width={14}
                                                            height={14}
                                                            className="w-auto h-auto"
                                                        />
                                                        <span>AGREGAR PELICULA</span>
                                                    </Modal>
                                                ) : (
                                                    <p className="relative group">
                                                        <Link href='/'>{obj.label}</Link>
                                                        <span className="absolute -bottom-1 left-0 w-0 h-1 rounded-full bg-primary transition-all group-hover:w-full"></span>
                                                    </p>
                                                )}
                                            </>
                                        </motion.li>
                                    )))}
                                </ul>
                            </nav>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
