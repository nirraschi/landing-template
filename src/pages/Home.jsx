// src/components/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import ImagePlaceholder from '../styles/Placeholder';

const Home = () => {
    return (
        <div>

            <Header />

            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <h1 className="text-5xl font-bold mb-4">Bienvenido a Nuestra Landing Page</h1>
                <p className="text-lg mb-6">Conectamos ideas y soluciones para tu negocio (?.</p>
                <a
                    href="#"
                    className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow-lg hover:bg-gray-100 transition"
                >
                    Empezá ahora
                </a>
            </div>

            <div className='flex justify-between m-4'>
                    <ImagePlaceholder
                        imageUrl=""
                        shape="arc"
                    />
                    <ImagePlaceholder
                        imageUrl=""
                        shape="semi-circle"
                    />
                    <ImagePlaceholder
                        imageUrl=""
                        shape="quarter-circle-4"
                    />
                    <ImagePlaceholder
                        imageUrl=""
                        shape="quarter-circle-2"
                    />
                    <ImagePlaceholder
                        imageUrl=""
                        shape="quarter-circle-3"
                    />
                                        <ImagePlaceholder
                        imageUrl=""
                        shape="quarter-circle-1"
                    />
            </div>

            <div>
                <About/>
                <Services/>
                <Contact/>
            </div>



        </div>
    );
};

export default Home;
