import { useState } from 'react';

const NavItems = ({ className }) => {
    return (
        <ul className={className}>
            <li className="py-2 text-white">
                item 1
            </li>
            <li className="py-2 text-white hover">
                item 2
            </li>
            <li className="py-2 text-white hover">
                item 3
            </li>
        </ul>
    );
};


const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
            <nav className="bg-sage border-gray-400 w-full p-5 md:px-40 fixed z-10 flex justify-between">

                <div className="text-white">
                    logo
                </div>

                <NavItems className={'hidden md:flex w-1/5 justify-between'}/>

                <button className="md:hidden" type="button" onClick={() => setIsOpen(old => !old)}>
                    {
                        !isOpen ? (
                            <svg className="fill-current stroke-1 text-white w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        ) : (
                            <svg
                                className="fill-current stroke-1 text-white block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        )
                    }
                </button>
                <NavItems className={`${ isOpen ? '' : 'hidden' } transition-all border-gray-400 w-full bg-sage left-0 top-[4rem] absolute px-4 flex flex-col`}/>
            </nav>

        </>
    );
};

export default NavBar;