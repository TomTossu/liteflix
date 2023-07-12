import React from 'react'
import { UPLOAD_STATES } from './Modal'
import Image from 'next/image'
import Link from 'next/link'

export const MovieForm = ({ uploadState, progressBar, validForm, title, handleImageUpload, handleTitleChange, handleClose, handleSubmit }) => {
    return (
        <>
            {uploadState === UPLOAD_STATES.FORM_SUCCESS ? (
                <Image
                    src='/logo.svg'
                    alt='logo'
                    width={113}
                    height={34}
                    className='self-center'
                />
            ) : (
                <h3 className='text-2xl lg:text-xl text-center text-primary mb-12 mt-24 lg:mt-0'>Agregar Pelicula</h3>
            )}

            <form
                onSubmit={(e) => handleSubmit(e)}
                className='flex flex-col items-center lg:gap-2'>
                {uploadState === UPLOAD_STATES.IDLE && (
                    <label htmlFor='file_input' className='flex items-center relative justify-center mb-12 gap-4 w-full h-20 lg:h-24 border-2 border-dashed cursor-pointer'>
                        <p>
                            <b>Agregá un archivo</b>
                            <span className='hidden lg:inline'>O ARRASTRALO Y SOLTALO AQUÍ</span>
                        </p>
                        <input
                            id='file_input'
                            type='file'
                            accept='image/*'
                            className='absolute w-full h-full cursor-pointer opacity-0'
                            name='file'
                            placeholder='Agregá un archivo'
                            onChange={(e) => handleImageUpload(e)}
                        />
                    </label>
                )}
                {uploadState === UPLOAD_STATES.IMAGE_UPLOAD && (
                    <div className='flex flex-col w-full gap-4 mb-12'>
                        <p className='text-left text-sm'>{`Cargando: ${progressBar}%`}</p>
                        <div className='bg-primary h-2' style={{ width: `${progressBar}%` }}>
                        </div>
                        <button type="button" onClick={() => handleClose()} className='text-right'>Cancelar</button>
                    </div>
                )}
                {uploadState === UPLOAD_STATES.ERROR && (
                    <div className='flex flex-col w-full gap-4 mb-12'>
                        <p className='text-left text-sm'>Error no se pudo cargar la pelicula</p>
                        <div className='bg-red-500 h-2' style={{ width: `${progressBar}%` }}>
                        </div>
                        <button type="button" className='text-right'>Reintentar</button>
                    </div>
                )}
                {uploadState === UPLOAD_STATES.IMAGE_SUCCESS && (
                    <div className='flex flex-col w-full gap-4 mb-12'>
                        <p className='text-left text-sm'>100% Cargado</p>
                        <div className='bg-primary h-2' style={{ width: `${progressBar}%` }}>
                        </div>
                        <span className='text-right'>¡Listo!</span>
                    </div>
                )}
                {uploadState !== UPLOAD_STATES.FORM_SUCCESS && (
                    <>
                        <input
                            name='title'
                            id='title'
                            type='text'
                            placeholder='Título'
                            className='text-center border-b-2 bg-transparent w-60 mb-24 lg:mb-12 focus:outline-none'
                            onChange={(e) => handleTitleChange(e)}
                        />
                        <button type='submit' className={`w-60 mb-6 bg-white text-secondary text-lg py-3 ${!validForm && 'opacity-40 cursor-not-allowed'}`} disabled={!validForm}>
                            Subir Pelicula
                        </button>
                        <button type="button" onClick={() => handleClose()} className={`lg:hidden w-60 mb-6 border border-white/50 bg-transparent text-lg py-3 ${!validForm && 'opacity-40 cursor-not-allowed'}`}>
                            Salir
                        </button>
                    </>
                )}
                {uploadState === UPLOAD_STATES.FORM_SUCCESS && (
                    <>
                        <div className='flex flex-col justify-center items-center text-center h-full w-full py-24'>
                            <h3 className='text-2xl font-bold mb-6'>¡Felicitaciones!</h3>
                            <p className='text-xl'>{`${title} fue correctamente subida.`}</p>
                        </div>
                        <button type="button" onClick={() => handleClose()} className='w-60 mb-6 bg-white text-secondary text-lg py-3'>
                            <Link href='/'>Ir a Home</Link>
                        </button>
                    </>
                )}
            </form>
        </>
    )
}
