import NavBar from './NavBar';
import { useRef } from 'react';
import DressCode from './DressCode';
import LocationSection from './LocationSection';


const WeddingApp = () => {
    const safeAreaRef = useRef();
    return (
        <>
            <NavBar safeAreaRef={safeAreaRef}/>
            <section ref={safeAreaRef} className="w-full h-full">
                <div
                    className="w-full h-screen bg-black bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3269&q=80)' }}
                >
                    <div
                        className="w-full h-full flex-col flex gap-y-5 justify-center items-center backdrop-brightness-50">
                        <h1 className="text-white text-6xl font-cormorant md:text-9xl">Karly &amp; Luis</h1>
                        <p className="mt-3 md:mt-6 text-white text-4xl font-cormorant md:text-6xl">November 17, 2023</p>
                    </div>
                </div>
            </section>
            <DressCode/>
            <LocationSection />
            <footer className="bg-sage-dark px-10 md:px-80 py-2 md:py-10">
                <p className="text-ivory font-light text-xs md:text-sm">Made by Luis Cortes</p>
            </footer>
        </>
    );
};

export default WeddingApp;