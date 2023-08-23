import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import Input from './Input'

const Modal = ({ title, content, btnText, btnFunc }) => {

    const onChangeFunc = (e) => {

    }

    return (
        <div className=' fixed top-0 bottom-0 right-0 left-0 w-full h-screen flex justify-center  items-center'>
            <div className='w-1/3 bg-white shadow-lg rounded-md p-4  '>
                <div className='border-b-2 py-3 flex justify-between items-center'>
                    <div className='text-2xl'>{title}</div>
                    <AiOutlineClose size={24} />
                </div>
                <Input
                    placeholder={"Ürün ekle"}
                    id={"Ürün"}
                    type={"ürün Türü"}
                    name={"Ürün adı"}
                    onChange={onChangeFunc}
                />
                <Input
                    placeholder={"Fiyat ekle"}
                    id={"fiyat"}
                    type={"fiyat Türü"}
                    name={"Fiyat adı"}
                    onChange={onChangeFunc}
                />
                <Input
                    placeholder={"Fiyat ekle"}
                    id={"fiyat"}
                    type={"fiyat Türü"}
                    name={"Fiyat adı"}
                    onChange={onChangeFunc}
                />

            </div>
        </div>
    )
}

export default Modal