import { Outlet, useNavigate } from 'react-router-dom';

const RsvpPage = () => {
    const navigate = useNavigate();

    // eslint-disable-next-line no-unused-vars
    const steps = [
        { name: 'Step 1', href: '#', status: 'complete' },
        { name: 'Step 2', href: '#', status: 'current' },
        { name: 'Step 3', href: '#', status: 'upcoming' },
        { name: 'Step 4', href: '#', status: 'upcoming' },
    ];

    return (
        <>
            <section className="w-full h-screen">
                <div
                    className="w-full h-screen bg-cover bg-no-repeat bg-ceter"
                    style={{ backgroundImage: 'url(https://d2wkbwb7am42vh.cloudfront.net/rsvp-img.jpg)' }}
                >
                    <div className="text-white text-xl md:text-2xl font-cormorant pl-4 pt-4">
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                        >
                            K &amp; L
                        </button>
                    </div>
                    <h1 className="w-full text-center mt-12 text-white font-cormorant text-7xl backdrop-brightness-70">RSVP</h1>

                </div>
                <Outlet />
            </section>
        </>
    );
};

export default RsvpPage;