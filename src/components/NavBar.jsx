import { useEffect, useRef, useState } from 'react';

const NavItems = ({ className, getDropdownHeight = () => {} }) => {
    const elRef = useRef();

    useEffect(() => {
        if (elRef.current.clientHeight > 0) {
            getDropdownHeight(elRef.current.clientHeight);
        }
    }, [ elRef, getDropdownHeight ]);

    return (
        <ul ref={elRef} className={className}>
            <li className="py-2 text-white">
                <a href="#dressCode"> Dress Code</a>
            </li>
            <li className="py-2 text-white hover">
                <a href="#location">Location</a>
            </li>
            <li className="py-2 text-white hover">
                item 3
            </li>
            <li className="py2 mb-3 mt-1">
                <button
                    className="border-solid border-2 border-sage-light hover:bg-sage-light hover:text-black hover:rounded-md font-medium text-white tracking-widest rounded p-1 px-2 mb-3transition-all duration-300 ease-in"
                >
                    RSVP
                </button>
            </li>
        </ul>
    );
};


const NavBar = ({ safeAreaRef }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ changeNavColor, setChangeNavColor ] = useState(false);
    const navRef = useRef();
    const [ dropdownHeight, setDropdownHeight ] = useState(0);

    useEffect(() => {
        const handleWindowScroll = () => {
            let totalHeight = safeAreaRef.current.clientHeight - navRef.current.clientHeight;
            if (isOpen) {
                totalHeight -= dropdownHeight;
            }

            if (window.scrollY > totalHeight) {
                setChangeNavColor(true);
            } else {
                setChangeNavColor(false);
            }
        };

        window.addEventListener('scroll', handleWindowScroll);

        return () => window.removeEventListener('scroll', handleWindowScroll);
    }, [ safeAreaRef, navRef, isOpen, dropdownHeight ]);

    return (
        <>
            <nav ref={navRef} className={`${ changeNavColor ? 'bg-sage-dark' : isOpen ? 'backdrop-blur-sm bg-white/20' :'' } w-full p-3 md:px-40 fixed z-10 flex justify-between transition-all duration-300 ease-in-out`}>

                <div className="text-white text-xl md:text-2xl font-cormorant">
                    K &amp; L
                </div>

                <NavItems className={'hidden md:flex w-1/3 justify-between items-baseline'}/>

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
                <NavItems getDropdownHeight={height => setDropdownHeight(height)} className={`${ isOpen ? '' : 'hidden' } ${ changeNavColor ? 'bg-sage-dark' : isOpen ? 'backdrop-blur-sm bg-white/20': '' } transition-all duration-300 ease-in-out border-solid border-b-2 border-t-[0.07rem] border-white rounded-sm w-full left-0 top-[3rem] absolute px-4 flex flex-col`}/>
            </nav>

        </>
    );
};

export default NavBar;