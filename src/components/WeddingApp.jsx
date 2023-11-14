import NavBar from './NavBar';
import { useRef } from 'react';
import LocationSection from './LocationSection';
import Faqs from './Faqs';

const WeddingApp = () => {
    const safeAreaRef = useRef();
    return (
        <>
            <NavBar safeAreaRef={safeAreaRef}/>
            <section ref={safeAreaRef} className="w-full h-full">
                <div
                    className="hero-image w-full h-screen bg-black bg-center bg-cover bg-no-repeat md:bg-top"
                >
                    <div
                        className="w-full h-full flex-col flex gap-y-5 items-center justify-start backdrop-brightness-50 ">
                        <h1 className="text-white text-6xl font-cormorant md:text-9xl mt-[90%] md:mt-[20%]">Karly &amp; Luis</h1>
                        <p className="mt-3 md:mt-6 text-white text-4xl font-cormorant md:text-6xl">November 17, 2023</p>
                    </div>
                </div>
            </section>
            <section className="my-10 flex flex-col gap-y-12">
                <div className="bg-champagne">
                    <h1 className="font-cormorant font-extralight text-light-gray text-6xl md:text-8xl py-10 md:mt-10 md:mb-10 text-center">Welcome</h1>
                </div>
                <div className="px-3 md:px-40 md:flex gap-x-6 justify-center">
                    <img src="https://d2wkbwb7am42vh.cloudfront.net/about-mobile.jpg"
                        alt=""
                        className="md:hidden w-full brightness-90">
                    </img>
                    <img src="https://d2wkbwb7am42vh.cloudfront.net/about-standard.jpg"
                        alt=""
                        className="hidden md:block w-2/4 brightness-90 ">
                    </img>
                    <div className="bg-sage-light bg-opacity-60 rounded-sm px-3 py-8 md:align-middle md:w-1/4">
                        <p className="font-cormorant text-lg md:text-xl tracking-wide leading-6 md:h-full">
                            Get ready to fall in love all over again this November! Join us as we tie the knot and
                            embark on the journey of a lifetime. You won&apos;t want to <i>leaf</i> this event off your calendar! It&apos;s going to be a <i>bouquet</i> of laughter, dancing, and unforgettable memories.
                            So mark your calendars, because this November, it&apos;s <i>knot</i> to be missed!
                            Let&apos;s make it a November to remember, and we can&apos;t wait to see you there!
                        </p>
                    </div>
                </div>

            </section>
            <LocationSection />
            <Faqs />
            <footer className="bg-sage-dark px-10 md:px-80 py-4 md:py-10">
                <p className="text-ivory font-light text-xs md:text-sm">Made by Luis Cortes</p>
            </footer>
            <button
                type="button"
                className="fixed bottom-4 left-4 rounded-full bg-blush-light p-2 text-white shadow-md drop-shadow-md hover:bg-blush-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blush-light"
            >
                <a href="https://www.zola.com/registry/luisandkarly2023"  className="py-2 text-white">
                    Registry
                </a>
            </button>
        </>
    );
};

export default WeddingApp;