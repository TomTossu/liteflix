import React from 'react'
import Image from 'next/image'
import { Menu } from './Menu'
import { Modal } from './Modal'

export const Navbar = () => {
    return (
        <section className="flex flex-col justify-between h-full w-full max-w-7xl mx-auto pb-16 lg:py-4 lg:px-6">
            <header className="flex justify-between lg:hidden">
                <Menu>
                    <Image
                        src="/icons/menu.svg"
                        alt="open menu"
                        width={26}
                        height={26}
                        className="w-auto h-auto scale-x-[-1]"
                    />
                </Menu>
                <Image
                    src="/icons/logo.svg"
                    alt="Liteflix"
                    width={98}
                    height={28}
                    className="w-auto h-auto"
                />
                <button>
                    <Image src="/icons/avatar.svg" alt="Profile" width={36} height={36} />
                </button>
            </header>
            <header className="hidden lg:flex lg:justify-between lg:h-10">
                <div className='flex flex-row items-center gap-16'>
                    <Image
                        src="/icons/logo.svg"
                        alt="Liteflix"
                        width={98}
                        height={28}
                        className="w-auto h-auto"
                    />
                    <Modal>
                        <Image
                            src="/icons/plus.svg"
                            alt="add movie"
                            width={14}
                            height={14}
                            className="w-auto h-auto"
                        />
                        <span>AGREGAR PELICULA</span>
                    </Modal>
                </div>
                <div className='flex flex-row items-center gap-12'>
                    <Menu>
                        <Image
                            src="/icons/menu.svg"
                            alt="open menu"
                            width={26}
                            height={26}
                            className="w-auto h-auto transition-transform ease-in-out hover:scale-125"
                        />
                    </Menu>
                    <button>
                        <Image
                            src="/icons/notification.svg"
                            alt='notification icon'
                            width={26}
                            height={26}
                            className='w-auto h-auto transition-transform ease-in-out hover:scale-125'
                        />
                    </button>
                    <button>
                        <Image src="/icons/avatar.svg" alt="Profile" width={36} height={36} className='transition-transform ease-in-out hover:scale-125' />
                    </button>
                </div>
            </header>
        </section>

    )
}
