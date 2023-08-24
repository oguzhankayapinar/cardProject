import React, { useState } from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi"

const ProductCard = ({ dt }) => {

    const [openEdit, setOpenEdit] = useState(false);

    return (
        <div className='w-[200px] h-[200px] relative m-2 rounded-md'>
            <img className='w-full h-full  rounded-md' src={dt?.url} alt="" />
            <div className='absolute w-full text-white bg-indigo-600 left-0 bottom-0 px-2'>
                <div className='text-lg font-semibold'>{dt?.name}</div>
                <div>{dt?.price}$</div>
            </div>
            <div onClick={() => setOpenEdit(!openEdit)} className=' top-0 right-2 absolute  '>
                <BiDotsHorizontalRounded color='white' size={24} />
            </div>

            {
                openEdit && (
                    <div className='bg-black border absolute text-white top-4 right-2 p-2 text-sm'>
                        <div className='cursor-pointer'>Sil</div>
                        <div className='cursor-pointer'>Güncelle</div>
                    </div>
                )
            }

        </div>
    )
}

export default ProductCard