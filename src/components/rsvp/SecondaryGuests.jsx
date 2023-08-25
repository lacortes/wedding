import { Disclosure, Switch } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGuest } from '../../redux/slices/rsvpSlice';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const SecondaryGuests = () => {
    const {
        primaryGuest: {
            avail_guests,
            first_name,
            last_name
        }
    } = useSelector(state => state.rsvp);
    const dispatch = useDispatch();
    const [ guests, setGuests ] = useState([]);

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
        setGuests(guests);
    }, [ avail_guests ]);

    const handleRsvpChange = (isToggled, id) => {

        const updated = guests.map((guest) => {
            if (guest.id === id)  {
                return ({
                    ...guest,
                    rsvp: isToggled ? 'ATTENDING' : 'NOT_ATTENDING'
                });
            }
            return guest;
        });
        setGuests(updated);
    };

    return (
        <form className="px-4 py-8 flex flex-col gap-6">
            <h1 className="font-cormorant text-2xl capitalize text-center">
                {first_name} {last_name}
            </h1>
            <div>
                <h2 className="font-semibold leading-7 text-gray-900">Guest Attendance</h2>
                <p className="mb-2 text-sm leading-6 text-gray-600">
                You have {avail_guests} guest(s), will they be attending?
                </p>

                <div className="flex flex-col gap-y-2 divide-y divide-gray-900/10">
                    {
                    // eslint-disable-next-line no-unused-vars
                        guests.map(({ id, first_name, last_name, rsvp }) => (
                            <Disclosure as="div" key={id}>
                                {({ open }) => (
                                    <div>
                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                            <span className="leading-7">{`Guest ${ id + 1 }`}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                                {open  ? (
                                                    <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                    <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                )}
                                            </span>

                                        </Disclosure.Button>
                                        <Disclosure.Panel as="div" className="flex flex-col gap-y-2 text-sm font-medium">
                                            <label>
                                                <p className="text-sm font-medium mb-1">First Name</p>
                                                <input
                                                    type="text"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sage-dark sm:text-sm sm:leading-6"
                                                />
                                            </label>
                                            <label>
                                                <p className="text-sm font-medium mb-1">Last Name</p>
                                                <input
                                                    type="text"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sage-dark sm:text-sm sm:leading-6"
                                                />
                                            </label>
                                            <Switch.Group as="div" className="flex items-center">
                                                <Switch
                                                    checked={rsvp === 'ATTENDING'}
                                                    onChange={isToggled => handleRsvpChange(isToggled, id)}
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

            </div>
        </form>
    );
};

export default SecondaryGuests;