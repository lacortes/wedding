/* eslint-disable no-unused-vars */
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { fetchGuest, submitRsvp } from '../../redux/slices/rsvpSlice';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const schema = Yup.object({
    firstName: Yup.string()
        .trim()
        .matches(/^[a-zA-Z]*$/, { message: 'Only letters allowed' })
        .min(2, 'Must be at least 2 letters')
        .required('Required'),
    lastName: Yup.string()
        .trim()
        .matches(/[a-zA-Z]/, { message: 'Only letters allowed' })
        .min(2, 'Must be at least 2 letters')
        .required('Required'),
    attending: Yup.boolean().required('Required')
});
const PrimaryGuest = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ submitError, setSubmitError ] = useState('');
    const [ submitSuccess, setSubmitSuccess ] = useState(false);
    const [ blockSubmissions, setBlockSubmissions ] = useState(false);
    const errorRef = useRef();

    useEffect(() => {
        if (submitError) {
            errorRef.current.scrollIntoView();
        }
    }, [ submitError ]);

    const handleAttending = (values) => {

        (async() => {
            try {
                const { rsvp: dbRsvp, avail_guests, } = await dispatch(fetchGuest({
                    firstName: values.firstName.toLowerCase(),
                    lastName: values.lastName.toLowerCase()
                })).unwrap();

                if (dbRsvp !== 'PENDING') {
                    setSubmitError('Please contact Karly or Luis to update your RSVP');
                    setBlockSubmissions(true);
                } else if (values.attending === false) {
                    await dispatch(submitRsvp({
                        primaryGuest: {
                            first_name: values.firstName.toLowerCase(),
                            last_name: values.lastName.toLowerCase(),
                            rsvp: 'NOT_ATTENDING',
                            selection: 0
                        }
                    }));
                    setSubmitError('');
                    setSubmitSuccess(true);
                } else {
                    setSubmitError('');
                    setSubmitSuccess(true);

                    if (avail_guests > 0) {
                        navigate('/rsvp/party');
                    } else {
                        navigate('/rsvp/menu');
                    }
                }

            } catch (code) {
                if (code === 404) {
                    setSubmitError(`Cannot find invitation for ${values.firstName} ${values.lastName}!`);
                } else {
                    setSubmitError('Something went wrong!');
                }
            } finally {
                setSubmitting(false);
            }
        })();
    };

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        initialValues,
        values,
        errors,
        touched,
        setFieldValue,
        isSubmitting,
        setSubmitting,
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            attending: false
        },
        validationSchema: schema,
        onSubmit: handleAttending
    });

    return (
        <form
            className="px-4 py-8 flex flex-col gap-6"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
            } }
        >
            <div>
                <h2 className="font-semibold leading-7 text-gray-900">Guest Information</h2>
                <p className="mb-4 text-sm leading-6 text-gray-600">
                Enter your information
                </p>
                <label htmlFor="firstName">
                    <p className="text-sm font-medium mb-2">First Name</p>
                    <input
                        id="firstName"
                        type="text"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sage-dark sm:text-sm sm:leading-6"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                    />
                </label>
                {touched.firstName && errors.firstName && (
                    <p
                        className="pl-1 py-2 text-xs text-red-500"
                    >
                        {errors.firstName}
                    </p>
                )}

                <label htmlFor="lastName">
                    <p className="mt-4 text-sm font-medium mb-2">Last Name</p>
                    <input
                        id="lastName"
                        type="text"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sage-dark sm:text-sm sm:leading-6"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                    />
                </label>
                {touched.lastName && errors.lastName && (
                    <p
                        className="pl-1 py-2 text-xs text-red-500"
                    >
                        {errors.lastName}
                    </p>
                )}
            </div>

            <div>
                <h2 className="font-semibold leading-7 text-gray-900">Attendance</h2>
                <p className="mb-2 text-sm leading-6 text-gray-600">
                    Will you be attending?
                </p>
                <fieldset>
                    <div className="space-y-1 flex items-baseline">
                        <div className="flex items-center mr-4">
                            <input
                                id="yesResponse"
                                name="attending"
                                type="radio"
                                value="true"
                                defaultChecked={initialValues.attending}
                                onChange={() => setFieldValue('attending', true)}
                                onBlur={handleBlur}
                                className="h-4 w-4 border-gray-300 text-sage-dark focus:ring-sage-dark"
                            />
                            <label htmlFor="yesResponse" className="ml-2 block text-sm font-medium leading-6 text-gray-900">
                        Yes
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="noResponse"
                                name="attending"
                                type="radio"
                                value="false"
                                defaultChecked={initialValues.attending === false}
                                onChange={() =>  setFieldValue('attending', false)}
                                onBlur={handleBlur}
                                className="h-4 w-4 border-gray-300 text-sage-dark focus:ring-sage-dark"
                            />
                            <label htmlFor="noResponse" className="ml-2 block text-sm font-medium leading-6 text-gray-900">
                        No
                            </label>
                        </div>
                    </div>
                    {
                        touched.attending && errors.attending
                        && (
                            <p
                                className="pl-1 py-2 text-xs text-red-500"
                            >
                                {errors.attending}
                            </p>
                        )
                    }
                </fieldset>
            </div>

            <div>
                {
                    values.attending ?
                        (
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-x-2 rounded-md border-2 border-solid border-sage-dark
                            px-3.5 py-2.5 text-sm font-semibold text-sage-dark shadow-sm hover:bg-sage-light hover:border-sage-light
                            hover:text-[#475E4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                            focus-visible:outline-sage disabled:opacity-60"
                                disabled={isSubmitting || blockSubmissions}
                            >
                            Next
                                <ChevronDoubleRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true"/>
                            </button>
                        )
                        :
                        (
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-sage-dark px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#475E4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage disabled:opacity-60"
                                disabled={isSubmitting || submitSuccess || blockSubmissions}
                            >
                                {submitSuccess ? 'Thank You!' : 'Submit' }
                            </button>
                        )
                }
                <div ref={errorRef}>
                    {submitError && <p className="pl-1 pt-3 pb-8 text-xs text-red-500">{submitError}</p>}
                </div>
            </div>
        </form>
    );
};

export default PrimaryGuest;