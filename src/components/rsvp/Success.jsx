import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-full">
            <nav className=" w-full p-3 md:px-40 fixed z-10 flex">
                <div className="text-white text-xl md:text-2xl font-cormorant">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                    >
                        K &amp; L
                    </button>
                </div>
            </nav>
            <div className="success-img w-full h-screen bg-center bg-contain bg-black">
                <div
                    className="w-full h-full flex-col flex gap-y-96 items-center justify-center">
                    <h1 className="text-white text-6xl font-cormorant md:text-9xl md:mt-[20%]">Thank You</h1>
                    <h1 className="text-white text-6xl font-cormorant md:text-9xl md:mt-[20%]">See you there!</h1>
                </div>
            </div>
        </div>
    );
};

export default Success;