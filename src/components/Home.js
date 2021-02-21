import React from "react"; 
import image from "../daichi.jpg"; 

export default function Home() {
    return (
        <main>
            <img src={image} alt="Daichi" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none :g:leading-snug home-name">Aloha. I'm Daichi</h1>
            </section>
        </main>
    )
}