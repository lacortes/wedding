const DressCode = () => {
    return (
        <section id="dressCode" className="px-10 flex-col flex justify-between items-center gap-y-10 md:gap-y-20 w-full md:px-40 py-10 md:py-20">
            <div>
                <h1 className="font-cormorant font-extralight text-center text-6xl md:text-8xl ">
                    Dress Code
                </h1>
                <p className="font-cormorant text-xl text-center">&mdash;<span className="p-2">Semi-Formal</span>&mdash;</p>
            </div>

            <p className="w-full break-normal leading-relaxed">
                The ceremony will be held outdoors on a grass field and the reception will be held under an open tent.
                The weather around November is typically warm during the day and will drop to cold temperatures as the day ends.
                For reference, on average expect a high of 74°F and a low of 47°F.
            </p>

            <h2 className="font-cormorant text-4xl md:text-5xl">
                What not to wear
            </h2>

            <div className="flex flex-col md:flex-row gap-y-8 ">
                <div className="w-full md:w-[50%] flex flex-col md:inline-flex gap-y-6">
                    <h3 className="font-cormorant font-light text-2xl md:text-4xl text-center">
                        &mdash;<span className="px-2">Women</span>&mdash;
                    </h3>

                    <ul className="list-disc list-inside">
                        <li>
                            There wil be grass, so no heels
                        </li>
                        <li>
                            No white or sage colors
                        </li>
                        <li>
                            For more information about a semi-formal attire, refer to
                            <a
                                className="underline ml-2"
                                href={'https://www.stitchfix.com/women/blog/fashion-tips/semi-formal-wedding-attire/'}>
                                this article
                            </a>.
                        </li>
                    </ul>
                </div>

                <div className="hidden md:block mx-10 w-[2px] h-52 border-solid border border-black ">
                    {/*    Vertical line */}
                </div>

                <div className="w-full md:w-[50%] flex flex-col md:inline-flex gap-y-6" >
                    <h2 className="font-cormorant font-light text-2xl md:text-4xl text-center">
                        &mdash;<span className="px-2">Men</span>&mdash;
                    </h2>

                    <ul className="list-disc list-inside">
                        <li>
                            T-shirts, jeans, flip-flop, sneakers, etc.
                        </li>
                        <li>
                            For more information about a semi-formal attire, refer to
                            <a
                                className="underline ml-2"
                                href={'https://www.oliverwicks.com/article/semi-formal-wedding-attire#what-is-a-semi-formal-wedding-dress-code'}>
                                this article
                            </a>.
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    );
};

export default DressCode;