import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='relative flex flex-col items-center justify-center min-h-[420px] w-full z-10'>
            <div className='w-full max-w-3xl mx-auto px-6 py-10 mt-8 mb-8 rounded-3xl bg-black/60 backdrop-blur-lg shadow-2xl border border-[#6A38C2] glassmorphism-glow flex flex-col items-center'>
                <span className='mx-auto px-4 py-2 rounded-full bg-white/80 text-[#F83002] font-medium mb-4'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-extrabold text-white drop-shadow-lg mb-4 text-center'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p className='text-lg text-gray-200 mb-8 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
                <div className='flex w-full justify-center z-10'>
                    <div className='flex w-full max-w-xl shadow-2xl border-2 border-[#6A38C2] pl-3 rounded-full items-center gap-4 mx-auto bg-white/90 backdrop-blur-lg glassmorphism-glow' style={{ minWidth: 320 }}>
                        <input
                            type="text"
                            placeholder='Find your dream jobs'
                            onChange={(e) => setQuery(e.target.value)}
                            className='outline-none border-none w-full bg-transparent text-lg px-2 py-3 text-gray-900'
                        />
                        <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] text-white font-bold px-6 py-3 text-lg shadow-lg hover:bg-[#4b247a] transition-all duration-200">
                            <Search className='h-5 w-5' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection