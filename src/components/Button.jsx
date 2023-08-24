import React from 'react'

const Button = ({ onClick, btnText }) => {

    return (
        <button className='w-full h-10 bg-indigo-600 flex justify-center items-center text-white mt-2 rounded-md border-transparent'
            onClick={onClick}
        >
            {btnText}
        </button>
    )
}

export default Button