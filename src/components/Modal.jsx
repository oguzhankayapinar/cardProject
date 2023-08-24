import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { modalFunc } from '../redux/modalSlice'


const Modal = ({ title, content }) => {

    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(modalFunc())
    }

    return (
        <div className=' fixed top-0 bottom-0 right-0 left-0 w-full h-screen flex justify-center  items-center'>
            <div className='w-1/3 bg-white shadow-lg rounded-md p-4  '>
                <div className='border-b-2 py-3 flex justify-between items-center'>
                    <div className='text-2xl'>{title}</div>
                    <AiOutlineClose size={24} onClick={handleClose} />
                </div>
                {content}
            </div>
        </div>
    )
}

export default Modal    