import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import parse from 'html-react-parser';


const faqs = [
    {
        question: 'What is the dress code?',
        answer:
            'Semi-formal. For more information about semi-formal attire, refer to<a className="underline ml-2" href="https://www.stitchfix.com/women/blog/fashion-tips/semi-formal-wedding-attire/">this article for women</a> and<a className="underline ml-2" href="https://www.oliverwicks.com/article/semi-formal-wedding-attire#what-is-a-semi-formal-wedding-dress-code">to this article for men</a>.',
    },
    {
        question: 'What can I not wear?',
        answer: 'No white or sage green colors. There will be grass, so no heels. No T-shirts, baseball caps, jeans, flip-flops, sneakers, etc.'
    },
    {
        question: 'Is the ceremony outdoors?',
        answer: 'Yes'
    },
    {
        question: 'Is the reception outdoors?',
        answer: 'Yes. The reception will be under an open tent with no walls.'
    },
    {
        question: 'What is the weather like in November at San Marcos?',
        answer: 'The weather around November is typically warm during the day and will drop to cold temperatures as the day ends. For reference, on average expect a high of 74°F and a low of 47°F.'
    },
    {
        question: 'Will there be alcoholic drinks?',
        answer: 'Yes. Please bring your ID, as they will be verifying age. If you do not have one, Alameda Swapmeet can provide you one for a small fee : ).  Please drink responsibly.'
    },
    {
        question: 'How many guests may I bring?',
        answer: 'In the invitation, we provided the total number of guests allowed. Unfortunately, we cannot accommodate more than the allocated count.'
    },
    {
        question: 'Are children allowed?',
        answer: 'We are very sorry, but we are keeping our special day as an adult-only occasion. We are only able to accommodate the children of the immediate wedding party. We appreciate your understanding that our wedding day is an adult-only affair.'
    },
    {
        question: 'Is there a registry?',
        answer: 'Yes,<a className="underline ml-2" href="https://www.oliverwicks.com/article/semi-formal-wedding-attire#what-is-a-semi-formal-wedding-dress-code">here it is!</a>'
    }
];

const Faqs = () => {
    return (
        <section id="faqs" className="h-full bg-white">
            <div className="mx-auto px-6 py-12 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h1 className="font-cormorant font-extralight pb-12 text-4xl md:text-6xl text-center">Frequently Asked Questions</h1>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-light-gray">{parse(faq.answer)}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Faqs;