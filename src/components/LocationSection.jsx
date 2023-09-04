const LocationSection = () => {
    return <section id="location" className="bg-sage-light my-14 md:px-40 py-10">
        <h1 className="font-cormorant font-extralight pb-12 text-6xl text-center">When &amp; Where</h1>
        <div className="w-full flex flex-col gap-y-12 items-center  md:pt-20">

            <div className="flex flex-col gap-y-12 md:flex-row md:gap-x-8 md:w-full">

                <div className="w-full px-3">
                    <div className="block bg-white">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat h-72 bg-bottom">
                            <img
                                className="brightness-90"
                                src="https://d2wkbwb7am42vh.cloudfront.net/ceremony.jpeg"
                                alt="" />
                        </div>
                        <div className="p-6">
                            <h2 className="text-center font-cormorant text-3xl">Wedding Ceremony</h2>
                            <h3 className="font-cormorant text-xl font-light text-light-gray text-center pb-6">3:00 pm</h3>
                            <p className="text-base text-neutral-600">
                            Join us for a heartfelt and intimate ceremony as we exchange vows and begin our journey together as husband and wife.
                            Our ceremony will take place in the serene and picturesque setting of Twin Oak&apos;s House outdoor garden.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full px-3">
                    <div className="block bg-white">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat h-72 bg-bottom">
                            <img
                                className="brightness-90"
                                src="https://d2wkbwb7am42vh.cloudfront.net/reception.jpeg"
                                alt="" />
                        </div>
                        <div className="p-6">
                            <h2 className="text-center font-cormorant text-3xl">Wedding Reception</h2>
                            <h3 className="font-cormorant text-xl font-light text-light-gray text-center pb-6">5:30 pm</h3>
                            <p className="text-base text-neutral-600">
                            Following the ceremony, gather with us in the reception area for a joyous celebration. Enjoy a delicious dinner, raise toasts, and dance the night away as we mark the beginning of our married life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col md:w-[40%] bg-ivory justify-center items-center gap-y-1 py-5 md:py-8">
                <p className="leading-6 text-center select-all md:text-2xl">
                    Twin Oaks House Weddings <br/>
                    236 Deer Springs Rd <br/>
                    San Marcos, Ca 92069 <br/>
                </p>

            </div>
            <div className="md:hidden">

                <iframe
                    className="w-[400px] h-[250px] shadow-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.9920052149987!2d-117.15472558859966!3d33.18808046275471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db8a6845e799ef%3A0xd199315c203ee547!2sTwin%20Oaks%20House%20Weddings!5e0!3m2!1sen!2sus!4v1691295477681!5m2!1sen!2sus"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
            <div className="hidden md:block">
                <iframe
                    className="w-[1080px] h-[450px] shadow-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.9920052149987!2d-117.15472558859966!3d33.18808046275471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db8a6845e799ef%3A0xd199315c203ee547!2sTwin%20Oaks%20House%20Weddings!5e0!3m2!1sen!2sus!4v1691295477681!5m2!1sen!2sus"
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>

    </section>;
};

export default LocationSection;