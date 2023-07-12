'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MovieForm } from './MovieForm'
import { addMovie } from '@/movies/api'
import { motion, AnimatePresence } from 'framer-motion'

export const UPLOAD_STATES = {
    IDLE: 'idle',
    IMAGE_UPLOAD: 'image_loading',
    IMAGE_SUCCESS: 'image_success',
    FORM_SUCCESS: 'success',
    ERROR: 'error'
}

export const Modal = ({ children }) => {
    const [showModal, setShowModal] = useState(false)
    const [progressBar, setProgressBar] = useState(0);
    const [uploadState, setUploadState] = useState(UPLOAD_STATES.IDLE)
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('')

    const [validForm, setValidForm] = useState(false)

    useEffect(() => {
        setValidForm(image !== null && title.trim() !== "");
    }, [image, title])

    const handleClose = () => {
        setShowModal(false)
        setProgressBar(0)
        setUploadState(UPLOAD_STATES.IDLE)
        setImage(null)
        setTitle('')
        window.location.reload(true)
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0]

        setUploadState(UPLOAD_STATES.IMAGE_UPLOAD)

        const progressInterval = setInterval(() => {
            setProgressBar((prevProgress) => prevProgress + 1);
        }, 10);

        setTimeout(() => {
            clearInterval(progressInterval);

            if (!file?.type.startsWith("image/")) {
                setUploadState(UPLOAD_STATES.ERROR);
            } else {
                setImage(file);
                setUploadState(UPLOAD_STATES.IMAGE_SUCCESS);
            }
            setProgressBar(100);
        }, 1000);
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validForm) {
            addMovie({ image, title });
            setUploadState(UPLOAD_STATES.FORM_SUCCESS)
        }
    }

    return (
        <>
            <button className='flex flex-row w-auto h-auto items-center gap-4 transition-transform ease-in-out hover:scale-125'
                onClick={() => setShowModal(true)}
            >
                {children}
            </button>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='flex justify-center items-center fixed inset-0 z-20 bg-gray-900/70'>
                        <div className='relative w-full lg:min-w-[700px] mx-auto max-w-3xl h-full lg:h-fit'>
                            <div className="flex flex-col w-full h-full relative bg-secondary shadow-lg p-6 lg:px-16 lg:py-12">
                                <Link href="/">
                                    <button
                                        className="hidden lg:flex absolute top-4 right-4"
                                        onClick={() => handleClose()}
                                    >
                                        <Image
                                            src="/plus.svg"
                                            alt="Close Modal"
                                            width={24}
                                            height={24}
                                            className="rotate-45"
                                        />
                                    </button>
                                </Link>
                                <MovieForm
                                    uploadState={uploadState}
                                    progressBar={progressBar}
                                    validForm={validForm}
                                    title={title}
                                    handleImageUpload={handleImageUpload}
                                    handleTitleChange={handleTitleChange}
                                    handleClose={handleClose}
                                    handleSubmit={handleSubmit}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
