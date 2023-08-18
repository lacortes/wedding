const LocationSection = () => {
    return <section id="location" className="bg-sage px-10 md:px-40 py-10  ">
        <h1 className="font-cormorant font-extralight text-ivory text-6xl text-center">Location</h1>
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-center md:pt-20">

            <div className="w-full flex flex-col justify-center items-center gap-y-1 py-5">

                <p className="text-ivory md:text-2xl">Twin Oaks House Weddings</p>
                <p className="text-ivory md:text-2xl">236 Deer Springs Rd</p>
                <p className="text-ivory md:text-2xl">San Marcos, Ca 92069</p>

            </div>
            <div className="md:hidden">

                <iframe
                    className="w-[300px] h-[250px] shadow-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.9920052149987!2d-117.15472558859966!3d33.18808046275471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db8a6845e799ef%3A0xd199315c203ee547!2sTwin%20Oaks%20House%20Weddings!5e0!3m2!1sen!2sus!4v1691295477681!5m2!1sen!2sus"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
            <div className="hidden md:block">
                <iframe
                    className="w-[600px] h-[450px] shadow-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.9920052149987!2d-117.15472558859966!3d33.18808046275471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db8a6845e799ef%3A0xd199315c203ee547!2sTwin%20Oaks%20House%20Weddings!5e0!3m2!1sen!2sus!4v1691295477681!5m2!1sen!2sus"
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>

    </section>;
};

export default LocationSection;