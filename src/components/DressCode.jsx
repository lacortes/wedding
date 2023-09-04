const DressCode = () => {
    return (
        <section id="dressCode" className="flex-col flex gap-y-10 md:gap-y-20 w-full h-screen py-10 md:py-20">
            <div className="bg-champagne py-10">
                <h1 className="font-cormorant font-extralight text-center text-6xl md:text-8xl ">
                    Dress Code
                </h1>
                <p className="font-cormorant text-xl text-center">&mdash;<span className="p-2">Semi-Formal</span>&mdash;</p>
            </div>

            <div className="rounded-full border-2 border-red-400 w-52 h-52 p-8">
                <svg className="stroke-red" width="100%" height="auto" id="fi_2347025" enableBackground="new 0 0 511.289 511.289"  viewBox="0 0 511.289 511.289"  xmlns="http://www.w3.org/2000/svg"><g><path d="m361.87 285.283c-1.876-3.693-6.394-5.165-10.084-3.289-3.693 1.877-5.165 6.391-3.289 10.084 22.66 44.591 49.496 114.93 51.64 200.72l-18.401-7.11c-6.941-2.681-14.189-4.251-21.493-4.737-3.01-37.16-10.313-73.947-21.749-109.427l-1.73-5.368c-1.272-3.943-5.5-6.109-9.44-4.837-3.942 1.271-6.108 5.497-4.838 9.439l1.73 5.368c11.015 34.171 18.075 69.591 21.025 105.375-5.078.714-10.103 1.949-14.986 3.739l-7.401 2.713c-13.703 5.022-28.679 4.718-42.167-.858-6.494-2.684-13.234-4.388-20.042-5.134v-101.611c0-4.142-3.357-7.5-7.5-7.5-4.142 0-7.5 3.358-7.5 7.5v101.531c-6.867.681-13.673 2.337-20.238 4.989l-.245.099c-13.948 5.635-29.323 5.665-43.294.084l-1.258-.503c-6.693-2.674-13.646-4.315-20.66-4.941 3.04-35.138 10.046-69.913 20.867-103.483l1.73-5.368c1.271-3.942-.895-8.169-4.837-9.439-3.944-1.271-8.168.895-9.439 4.837l-1.73 5.368c-11.324 35.133-18.601 71.542-21.665 108.325-6.289.754-12.514 2.314-18.527 4.721l-15.191 6.081c2.027-79.303 25.306-145.045 44.976-186.944 18.378-39.15 36.968-65.045 43.141-73.191h112.744c3.854 5.079 12.531 17.042 22.914 34.737 2.096 3.573 6.693 4.768 10.265 2.673 3.572-2.096 4.768-6.692 2.673-10.264-11.778-20.071-21.33-32.916-24.892-37.511v-24.174c6.888-17.706 19.154-46.46 24.388-52.197 21.482-23.544 25.513-58.08 10.029-85.937l-3.261-5.869c-3.224-5.799-5.434-12.053-6.569-18.588l-5.07-29.17c-.626-3.593-3.744-6.216-7.391-6.216h-20.368c-.306 0-.605.024-.901.059-.114.012-.228.035-.342.052-.11.018-.22.033-.328.056-.864.174-1.708.495-2.489.988l-16.018 10.099c-23.686 14.933-54.295 14.934-77.982 0l-16.019-10.1c-1.284-.81-2.721-1.175-4.136-1.147-.059 0-.117-.007-.176-.007h-20.368c-3.646 0-6.765 2.623-7.389 6.215l-5.071 29.171c-1.136 6.535-3.346 12.788-6.569 18.587l-3.261 5.868c-7.586 13.649-10.64 29.06-8.833 44.57.001.005.001.009.001.014 1.811 15.515 8.332 29.815 18.86 41.353.592.649 2.34 2.878 5.782 9.547 1.332 2.581 3.954 4.062 6.671 4.062 1.158 0 2.333-.269 3.433-.837 3.681-1.899 5.126-6.423 3.226-10.104-3.223-6.246-5.775-10.306-8.031-12.779-8.396-9.202-13.597-20.607-15.042-32.981 0 0 0 0 0-.001-1.444-12.374.992-24.67 7.044-35.559l3.261-5.868c4.041-7.27 6.812-15.112 8.236-23.306l3.991-22.952h6.886c1.58 17.532 8.901 32.336 21.349 43.045 12.032 10.351 28.02 16.051 45.02 16.051 16.998 0 32.988-5.701 45.02-16.051 12.448-10.709 19.77-25.514 21.349-43.045h6.886l3.99 22.954c1.424 8.194 4.195 16.035 8.236 23.305l3.261 5.869c12.349 22.218 9.135 49.762-7.999 68.54-7.642 8.376-20.592 39.913-25.927 53.404h-109.643c-1.308-3.287-3.211-8-5.443-13.321-1.602-3.819-5.996-5.618-9.817-4.015-3.82 1.602-5.617 5.998-4.015 9.817 3.127 7.454 5.64 13.808 6.666 16.428v24.432c-5.807 7.509-25.474 34.266-45.331 76.452-21.331 45.32-46.759 117.66-46.759 204.923 0 2.489 1.235 4.816 3.296 6.211s4.681 1.677 6.991.752l25.621-10.256c6.433-2.575 13.168-3.944 19.926-4.138h.015c.013 0 .025-.002.038-.002 7.83-.218 15.69 1.146 23.145 4.124l1.258.503c17.579 7.022 36.926 6.984 54.47-.104l.245-.099c6.827-2.758 13.981-4.16 21.142-4.236.323.042.65.072.984.072.306 0 .606-.024.903-.06 7.094.157 14.167 1.614 20.908 4.401 16.972 7.016 35.815 7.4 53.06 1.08l7.401-2.713c13.235-4.851 27.766-4.724 40.912.356l28.742 11.105c.875.338 1.791.504 2.702.504 1.494 0 2.976-.446 4.242-1.314 2.04-1.398 3.259-3.713 3.259-6.186-.002-93.737-29.044-170.563-53.406-218.505zm-71.091-238.609c-9.313 8.011-21.826 12.422-35.237 12.422s-25.925-4.412-35.237-12.422c-7.417-6.381-12.421-14.804-14.818-24.742l3.19 2.011c28.547 17.998 65.435 17.997 93.982 0l2.896-1.826c-2.415 9.858-7.405 18.216-14.776 24.557zm17.199 157.399v13.443h-104.873v-13.443z"></path></g></svg>
            </div>
            <p className="w-full break-normal leading-relaxed md:w-2/4">
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