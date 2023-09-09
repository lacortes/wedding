import axios from 'axios';
import { API_ROOT } from '../config/environment';

const api = axios.create({ baseURL: API_ROOT });

async function getGuest({ firstName, lastName }) {
    return await api.get(
        '/v1/guests',
        { params: { first_name: firstName, last_name: lastName } }
    );
}

async function submitRsvp({ primaryGuest, party }) {
    return await api.post(
        '/v1/guests/rsvp',
        {
            'guest' :primaryGuest,
            party
        }
    );
}

export {
    getGuest,
    submitRsvp
};