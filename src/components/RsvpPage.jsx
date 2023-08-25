import { Outlet } from 'react-router-dom';

const RsvpPage = () => {
    // eslint-disable-next-line no-unused-vars
    const steps = [
        { name: 'Step 1', href: '#', status: 'complete' },
        { name: 'Step 2', href: '#', status: 'current' },
        { name: 'Step 3', href: '#', status: 'upcoming' },
        { name: 'Step 4', href: '#', status: 'upcoming' },
    ];

    return (
        <>
            <section className="w-full h-full">
                <div
                    className="w-full h-screen bg-cover bg-no-repeat bg-ceter"
                    style={{ backgroundImage: 'url(https://d2wkbwb7am42vh.cloudfront.net/rsvp-img.jpg)' }}
                >
                    <div className="text-white text-xl md:text-2xl font-cormorant pl-4 pt-4">
                        K &amp; L
                    </div>
                    <h1 className="w-full text-center mt-12 text-white font-cormorant text-7xl backdrop-brightness-70">RSVP</h1>

                </div>
            </section>
            <div>

                <div>
                    <Outlet />
                </div>

                <div className="flex flex-col items-center gap-y-2" aria-label="Progress">

                    <ol role="list" className="flex items-center space-x-5">
                        {steps.map((step) => (
                            <li key={step.name}>
                                {step.status === 'complete' ? (
                                    <a href={step.href} className="block h-2.5 w-2.5 rounded-full bg-indigo-600 hover:bg-indigo-900">
                                        <span className="sr-only">{step.name}</span>
                                    </a>
                                ) : step.status === 'current' ? (
                                    <a href={step.href} className="relative flex items-center justify-center" aria-current="step">
                                        <span className="absolute flex h-5 w-5 p-px" aria-hidden="true">
                                            <span className="h-full w-full roun
                                            ded-full bg-indigo-200" />
                                        </span>
                                        <span className="relative block h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
                                        <span className="sr-only">{step.name}</span>
                                    </a>
                                ) : (
                                    <a href={step.href} className="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
                                        <span className="sr-only">{step.name}</span>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ol>
                    <p className="text-sm font-medium">
                        Step {steps.findIndex((step) => step.status === 'current') + 1} of {steps.length}
                    </p>
                </div>

            </div>

        </>
    );
};

export default RsvpPage;