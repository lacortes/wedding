import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { RadioGroup } from '@headlessui/react';
import { resetGuest, submitRsvp } from '../../redux/slices/rsvpSlice';
import { useNavigate } from 'react-router-dom';


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
    const titleRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ errorMsg, setErrorMsg ] = useState('');

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

    useEffect(() => {
        titleRef.current.scrollIntoView();
    }, []);

    return (
        <div className="px-4 py-8 flex flex-col">
            <h1 ref={titleRef} className="font-cormorant font-semibold text-3xl leading-8 text-gray-900 capitalize text-center"> Menu </h1>

            <div className="w-full h-full flex flex-col gap-8 scroll-smooth mt-8 mb-8">

                {menu.map(({ menuId, name, description,  }) => (
                    <div key={menuId} className="w-full h-64 p-4 overflow-hidden bg-white sm:rounded-lg rounded-md shadow-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h2 className="font-semibold leading-7 text-lg text-gray-900 capitalize text-center">{name}</h2>
                            <p className="mt-4 uppercase text-center text-gray-500">{description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="font-semibold leading-7 text-lg text-gray-900">Menu Selection</h2>
            <p className="leading-6 text-gray-600">
                Select your preferred meal option
            </p>

            <Formik
                enableReinitialize
                initialValues={guests}
                onSubmit={({ guests }) => {
                    const primaryGuest = guests.find(g => g?.guest_type === 'PRIMARY');
                    if (!primaryGuest) {
                        setErrorMsg('Something went wrong!');
                        return;
                    }

                    primaryGuest.rsvp = 'ATTENDING';

                    const party = guests.filter(g => g.guest_type === undefined);

                    (async () => {

                        try {
                            await dispatch(submitRsvp({ primaryGuest, party  })).unwrap();
                            dispatch(resetGuest());
                            navigate('/thankyou', { replace: true });
                        } catch (error) {
                            console.error('Error', error.message);
                            setErrorMsg('Something went wrong!');
                        }

                    })();

                }}
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
                                                <h3 className="capitalize"> {first_name} {last_name} </h3>

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
                            Submit RSVP
                        </button>

                        {
                            errorMsg && (
                                <p className="pl-1 pt-3 pb-8 text-xs text-red-500">{errorMsg}</p>
                            )
                        }

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MenuSelection;