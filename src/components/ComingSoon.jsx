const ComingSoon = () => {
    return (
        <div
            className='w-full h-screen bg-cover bg-center'
            style={{ backgroundImage: 'url(https://d2wkbwb7am42vh.cloudfront.net/coming-soon.jpg)' }}
        >
            <div className="w-full h-full backdrop-brightness-50 flex flex-col gap-y-5 justify-center items-center">
                <h1 className="text-white font-cormorant font-light text-8xl md:text-9xl tracking-wide">
                    K&amp;L
                </h1>
                <p className="text-white text-5xl md:text-6xl font-cormorant font-light tracking-wide">Coming Soon</p>
            </div>

        </div>
    );
};

export default ComingSoon;