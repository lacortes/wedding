import axios from 'axios';
import { API_ROOT } from '../config/environment';

const api = axios.create({ baseURL: API_ROOT });

async function getGuest({ firstName, lastName }) {
    return await api.get(
        '/v1/guests',
        { params: { first_name: firstName, last_name: lastName } }
    );
}

async function updateGuest({ firstName, lastName, rsvp }) {
    return await api.put(
        '/v1/guests',
        {
            'first_name': firstName,
            'last_name': lastName,
            rsvp
        }
    );
}

export {
    getGuest,
    updateGuest
};