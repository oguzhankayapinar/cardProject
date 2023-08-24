import React from 'react'
import { BiAddToQueue } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { modalFunc } from '../redux/modalSlice';
import { searchDataFunc, sortingDataFunc } from '../redux/dataSlice';

const Header = () => {

    const dispatch = useDispatch();
    return (
        <div className='flex items-center justify-between bg-indigo-600 text-white px-4 py-3'>
            <div className='text-3xl'>Card Project   </div>

            <div className='flex items-center gap-5'>
                <div className='text-black'>
                    <select onChange={e => dispatch(sortingDataFunc(e.target.value))} className='rounded h-10' name="" id="">
                        <option value="asc"> Artan </option>
                        <option value="desc"> Azalan </option>
                    </select>
                </div>
                <input
                    onChange={e => dispatch(searchDataFunc(e.target.value))}
                    className='rounded-lg h-10 px-4 text-black' type="text"
                    placeholder='Arama Yapınız...'
                />
                <div onClick={() => dispatch(modalFunc())} className='bg-indigo-800 cursor-pointer rounded-full w-10 h-10 flex items-center justify-center '>
                    <BiAddToQueue size={24} />
                </div>
            </div>
        </div>
    )
}

export default Header;