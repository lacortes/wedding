import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { RadioGroup } from '@headlessui/react';


const schema = Yup.object({
    guests: Yup.array()
        .of(
            Yup.object({ selection: Yup.number().required().integer() })
        )
});

const menu = [
    {
        menuId: 1,
        name: 'Parmesan Chicken',
        description: 'Grilled marinated chicken breast topped with tomato, basil, garlic, and olive oil'
    },
    {
        menuId: 2,
        name: 'Harvest Roast',
        description: 'USDA Choice beef stuffed with roasted garlic, infused with fresh rosemary & thyme, ' +
            'rubbed with whole grain mustard, and topped with a mediterranean style olive au jus sauce'
    }
];

const menuOptions = [
    { name: 'Chicken', menuId: 1 },
    { name: 'Roast', menuId: 2 }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const MenuSelection = () => {

    const {
        primaryGuest,
        secondaryGuests
    } = useSelector(state => state.rsvp);
    const [ guests, setGuests ] = useState({  guests: [] });

    useEffect(() => {
        const none = 0;
        const defaultChicken = 1;

        const allGuests = [ primaryGuest, ...secondaryGuests ]
            .map(g => ({
                ...g,
                selection: g.rsvp === 'NOT_ATTENDING' ? none : defaultChicken
            }));
        setGuests({  guests: allGuests });

    }, [ primaryGuest, secondaryGuests ]);

    return (
        <div className="px-4 py-8 flex flex-col">
            <h1 className="font-cormorant text-3xl capitalize text-center"> Menu Selection </h1>

            <div className="w-full h-full flex flex-col gap-8 scroll-smooth mt-8 mb-8">

                {menu.map(({ menuId, name, description,  }) => (
                    <div key={menuId} className="w-full h-72 p-4 overflow-hidden bg-white sm:rounded-lg rounded-md shadow-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h2 className="capitalize text-2xl text-center">{name}</h2>
                            <p className="mt-4 uppercase font-medium text-center text-gray-500">{description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Formik
                enableReinitialize
                initialValues={guests}
                onSubmit={(values) => console.log(values)}
                validationSchema={schema}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <FieldArray name="guests">
                            {({ replace }) => (
                                <>
                                    {
                                        values.guests.map(({ first_name, last_name, selection, rsvp, ...rest }, index) => (
                                            <div className="mt-5" key={`${index}`}>
                                                <h3 className="font-cormorant text-xl capitalize"> {first_name} {last_name} </h3>

                                                <RadioGroup
                                                    value={selection}
                                                    onChange={(val) => replace(index, {
                                                        first_name, last_name, rsvp, selection: val, ...rest
                                                    })} className="mt-2"
                                                >
                                                    <RadioGroup.Label className="sr-only">Choose a menu option</RadioGroup.Label>
                                                    <div className="w-full grid grid-cols-3 gap-3 sm:grid-cols-6">
                                                        {menuOptions.map((option) => (
                                                            <RadioGroup.Option
                                                                key={option.name}
                                                                value={option.menuId}
                                                                disabled={rsvp === 'NOT_ATTENDING'}
                                                                className={({ active, checked }) =>
                                                                    classNames(
                                                                        rsvp === 'NOT_ATTENDING' ? 'cursor-not-allowed opacity-25 pointer-events-none' : 'cursor-pointer focus:outline-none',
                                                                        active ? 'ring-2 ring-dark-sage ring-offset-2' : '',
                                                                        checked
                                                                            ? 'bg-sage-dark text-white hover:bg-sage'
                                                                            : 'ring-1 ring-inset ring-sage-dark bg-white text-gray-900 hover:bg-sage-dark',
                                                                        'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1'
                                                                    )
                                                                }
                                                            >
                                                                <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
                                                            </RadioGroup.Option>
                                                        ))}
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                        ))
                                    }
                                </>
                            )}
                        </FieldArray>
                        <button
                            type="submit"
                            className="mt-10 block w-full rounded-md bg-sage-dark px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#475E4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage disabled:opacity-60"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MenuSelection;