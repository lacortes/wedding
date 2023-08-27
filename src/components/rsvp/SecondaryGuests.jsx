import { Disclosure, Switch } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGuest } from '../../redux/slices/rsvpSlice';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';
import NextButton from '../NextButton';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const schema = Yup.object({
    guests: Yup.array()
        .of(
            Yup.object({
                first_name: Yup.string()
                    .trim()
                    .matches(/^[a-zA-Z]*$/, { message: 'Only letters allowed' })
                    .min(3, 'Must be at least 3 letters')
                    .max(10, 'Cannot exceed 10 letters')
                    .required('Required'),
                last_name: Yup.string()
                    .trim()
                    .matches(/^[a-zA-Z]*$/, { message: 'Only letters allowed' })
                    .min(3, 'Must be at least 3 letters')
                    .max(10, 'Cannot exceed 10 letters')
                    .required('Required'),
                rsvp: Yup.string().required('Required')
            })
        )
});

const SecondaryGuests = () => {
    const {
        primaryGuest: {
            avail_guests,
            first_name,
            last_name
        }
    } = useSelector(state => state.rsvp);
    const dispatch = useDispatch();
    const [ guests, setGuests ] = useState({ guests: [] });

    useEffect(() => {
        const sessionName = sessionStorage.getItem('name');
        if (sessionName) {
            const { first_name, last_name }  = JSON.parse(sessionName);
            dispatch(fetchGuest({ firstName: first_name, lastName: last_name }));
        }
    }, [ dispatch ]);

    useEffect(() => {
        const guests = [ ...Array(avail_guests) ]
            .map((el, idx) => ({
                id: idx,
                first_name: '',
                last_name: '',
                rsvp: 'NOT_ATTENDING'
            }));
        setGuests({ guests });
    }, [ avail_guests ]);

    console.log('rerender');

    return (
        <div className="px-4 py-8 flex flex-col gap-6">
            <h1 className="font-cormorant text-2xl capitalize text-center">
                {first_name} {last_name}
            </h1>
            <div>
                <h2 className="font-semibold leading-7 text-gray-900">Guest Attendance</h2>
                <p className="mb-2 text-sm leading-6 text-gray-600">
                You have {avail_guests} guest(s), will they be attending?
                </p>

                <Formik
                    enableReinitialize // Need this so formik can listen to initialValues changes
                    initialValues={guests}
                    validationSchema={schema}
                    onSubmit={() => console.log('submit')}
                >
                    {({ values, isValid, isSubmitting, touched, submitCount  }) => (
                        <Form>
                            <FieldArray name="guests">
                                {/* eslint-disable-next-line no-unused-vars */}
                                {({ replace }) => (
                                    <div className="flex flex-col gap-y-2 divide-y divide-gray-900/10">
                                        {
                                            values.guests.map(({ first_name, last_name, rsvp = 'NOT_ATTENDING' }, index) => (
                                                <Disclosure as="div" key={`${index}`}>
                                                    {({ open }) => (
                                                        <div>
                                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                                <span className="leading-7">{`Guest ${ index + 1 }`}</span>
                                                                <span className="ml-6 flex h-7 items-center">
                                                                    {open  ? (
                                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                                    ) : (
                                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                                    )}
                                                                </span>

                                                            </Disclosure.Button>
                                                            <Disclosure.Panel as="div" className="flex flex-col gap-y-2 text-sm font-medium">
                                                                <label htmlFor={`guests.${index}.first_name`}>
                                                                    <p className="text-sm font-medium mb-1">First Name</p>
                                                                    <Field
                                                                        type="text"
                                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sage-dark sm:text-sm sm:leading-6"
                                                                        name={`guests.${index}.first_name`}
                                                                    />
                                                                    <span className="text-xs text-red-500">
                                                                        <ErrorMessage name={`guests.${index}.first_name`} />
                                                                    </span>
                                                                </label>
                                                                <label htmlFor={`guests.${index}.last_name`}>
                                                                    <p className="text-sm font-medium mb-1">Last Name</p>
                                                                    <Field
                                                                        type="text"
                                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sage-dark sm:text-sm sm:leading-6"
                                                                        name={`guests.${index}.last_name`}
                                                                    />
                                                                    <span className="text-xs text-red-500">
                                                                        <ErrorMessage name={`guests.${index}.last_name`} />
                                                                    </span>
                                                                </label>
                                                                <Switch.Group as="div" className="flex items-center">
                                                                    <Switch
                                                                        checked={rsvp === 'ATTENDING'}
                                                                        onChange={isToggled => replace(index, {  first_name, last_name, rsvp: isToggled ? 'ATTENDING' : 'NOT_ATTENDING' })}
                                                                        className={classNames(
                                                                            rsvp === 'ATTENDING' ? 'bg-sage-dark' : 'bg-gray-200',
                                                                            'relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sage-dark focus:ring-offset-2'
                                                                        )}
                                                                    >
                                                                        <span
                                                                            aria-hidden="true"
                                                                            className={classNames(
                                                                                rsvp === 'ATTENDING' ? 'translate-x-5' : 'translate-x-0',
                                                                                'pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                                            )}
                                                                        />
                                                                    </Switch>
                                                                    <Switch.Label as="span" className="ml-3 text-sm">
                                                                        <span className="font-medium text-gray-900">Attending</span>
                                                                    </Switch.Label>
                                                                </Switch.Group>
                                                            </Disclosure.Panel>
                                                        </div>
                                                    )}
                                                </Disclosure>
                                            ))
                                        }
                                    </div>
                                )}
                            </FieldArray>

                            <NextButton disabled={isSubmitting} className='mt-4' />
                            { !isValid && submitCount > 0 && touched.guests && <p className="mt-2 pl-1 text-xs text-red-500">Ensure fields are completed</p>}

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SecondaryGuests;