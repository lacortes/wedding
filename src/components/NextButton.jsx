import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

const NextButton = ({ disabled=false, className='' } ) => {
    return (
        <button
            type="submit"
            className={`w-full flex justify-center items-center gap-x-2 rounded-md border-2 border-solid border-sage-dark
                            px-3.5 py-2.5 text-sm font-semibold text-sage-dark shadow-sm hover:bg-sage-light hover:border-sage-light
                            hover:text-[#475E4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                            focus-visible:outline-sage disabled:opacity-60 ${ className }`}
            disabled={disabled}
        >
            Next
            <ChevronDoubleRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true"/>
        </button>
    );
};

export default NextButton;