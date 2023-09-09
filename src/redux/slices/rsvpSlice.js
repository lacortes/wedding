import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../core/api';

const initialState = {
    primaryGuest: {
        guest_id: 0,
        first_name: '',
        last_name: '',
        guest_type: '',
        avail_guests: 0,
        rsvp: '',
        updated_at: ''
    },
    secondaryGuests: [

    ]
};

export const fetchGuest  = createAsyncThunk(
    'rsvp/fetchGuest',
    async ({ firstName, lastName }, { rejectWithValue }) => {
        try {
            const resp = await api.getGuest({
                firstName,
                lastName
            });
            return resp.data;
        } catch (error) {
            return rejectWithValue(error.response.status);
        }
    }
);

export const submitRsvp = createAsyncThunk(
    'rsvp/submitRsvp',
    async ({ primaryGuest, party }) => {
        return api.submitRsvp({
            primaryGuest,
            party   
        });
    }
);

export const rsvpSlice = createSlice({
    name: 'rsvp',
    initialState,
    reducers: {
        resetGuest: (state) => {
            state.primaryGuest = { ...initialState.primaryGuest };
            state.secondaryGuests = [ ...initialState.secondaryGuests ];
        },
        updateSecondaryGuests: (state, action) => {
            state.secondaryGuests = [ ...action.payload ];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGuest.fulfilled, (state, action) => {
                state.primaryGuest = { ...action.payload };
            });
    }
});

export const { updateSecondaryGuests, resetGuest } = rsvpSlice.actions;
export default rsvpSlice.reducer;