"use client";

import Image from "next/image";
import banner from "../../public/avengers-movie.jpg";
import { useState } from "react";
export default function Slider({title} : {title:string}) {
    const [scrollRight, setScrollRight] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scroll = 200;
    const slideLeft = (e: any) => {
        const slider = e.target.parentNode.parentNode.nextElementSibling;
        slider.style.scrollBehavior = 'smooth';
        if (slider.scrollLeft !== slider.scrollWidth) slider.scrollLeft += scroll;
        
    }
    const slideRight = (e: any) => {
        const slider = e.target.parentNode.parentNode.nextElementSibling;
        slider.style.scrollBehavior = 'smooth';
        if (slider.scrollLeft !== 0) slider.scrollLeft -= scroll;
    }
    return (
        <main className="relative">
            <header className="px-10">
                <h1 className="text-5xl font-bold uppercase text-white">{title}</h1>
            </header>
            <div className="absolute z-50 w-full inset-y-2/4 flex justify-between">
                
                    <button
                        onClick={e => slideLeft(e)} 
                        className="relative content-center transition ease-in-out hover:bg-white hover:text-slate-400">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-24 h-24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </button>

                
                    <button 
                        onClick={e => slideRight(e)} 
                        className="relative py-10 px-5 transition ease-in-out hover:bg-white hover:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute right-0 z-0 w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
            </div>
            <div className="flex flex-row gap-10 my-4 py-12 overflow-auto">

                <div className="min-w-64 relative transition-all duration-1000 delay-50 ease-in-out hover:scale-125">
                    <Image 
                        src={banner}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="Picture of the author"
                    />
                </div>

                <div className="min-w-64 relative transition-all duration-1000 delay-50 ease-in-out hover:scale-125">
                    <Image 
                        src={banner}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="Picture of the author"
                    />
                </div>

                <div className="min-w-64 relative transition-all duration-1000 delay-50 ease-in-out hover:scale-125">
                    <Image 
                        src={banner}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="Picture of the author"
                    />
                </div>

                <div className="min-w-64 relative transition-all duration-1000 delay-50 ease-in-out hover:scale-125">
                    <Image 
                        src={banner}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="Picture of the author"
                    />
                </div>

                <div className="min-w-64 relative transition-all duration-1000 delay-50 ease-in-out hover:scale-125">
                    <Image 
                        src={banner}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="Picture of the author"
                    />
                </div>

                <div className="min-w-64 relative transition-all duration-1000 delay-50 ease-in-out hover:scale-125">
                    <Image 
                        src={banner}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="Picture of the author"
                    />
                </div>

                <div className="min-w-64 relative transition-all duration-1000 delay-50 ease-in-out hover:scale-125">
                    <Image 
                        src={banner}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </main>
    )
}