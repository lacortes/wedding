import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';

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

export const updateGuest = createAsyncThunk(
    'rsvp/updateGuest',
    async ({ firstName, lastName, rsvp }, { rejectWithValue }) => {
        try {
            const resp = await api.updateGuest({
                firstName,
                lastName,
                rsvp
            });
            return resp.data;
        } catch (error) {
            return rejectWithValue(error.response.status);
        }
    }
);

export const rsvpSlice = createSlice({
    name: 'rsvp',
    initialState,
    reducers: {
        updatePrimaryGuest: (state, action) => {
            state.primaryGuest = {
                ...state.primaryGuest,
                ...action.payload
            };
        }
    },
    extraReducers: {
        [fetchGuest.fulfilled]: (state, action)  => {
            state.primaryGuest = { ...action.payload };
        },
        [updateGuest.fulfilled]: (state, action) => {
            state.primaryGuest = { ...action.payload };
        }
    }
});

export const { updatePrimaryGuest } = rsvpSlice.actions;
export default rsvpSlice.reducer;