import React from 'react'

const Input = ({ value, type, id, name, onChange, placeholder }) => {
    return (
        <input value={value} className='h-10 w-full border rounded-md p-2 outline-none mt-3' type={type} id={id} name={name} nChange={onChange} placeholder={placeholder} />
    )
}

export default Input