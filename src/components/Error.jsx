import NavBar from './NavBar';
import { useRef } from 'react';

const Error = () => {
    const safeAreaRef = useRef();
    return (
        <>
            <NavBar safeAreaRef={safeAreaRef} />
            <section ref={safeAreaRef} className="w-full h-full bg-sage-dark">
                <div className="w-full h-screen flex flex-col justify-start items-center">
                    <h1  className="pt-[50%] text-white font-cormorant text-5xl">Nothing to see here</h1>
                </div>
            </section>

        </>
    );
};

export default Error;