import '../styles/style.css';
import ComingSoon from './ComingSoon';
import WeddingApp from './WeddingApp';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Error from './Error';
import RsvpPage from './RsvpPage';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import PrimaryGuest from './rsvp/PrimaryGuest';
import SecondaryGuests from './rsvp/SecondaryGuests';
import MenuSelection from './rsvp/MenuSelection';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Success from './rsvp/Success';

const comingSoon = false;

const makeRouter = () => {
    return createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path="/"
                    element={<WeddingApp />}
                    errorElement={<Error />}
                />
                <Route
                    path="/rsvp"
                    element={<RsvpPage />}
                >
                    <Route path="guest" element={<PrimaryGuest />}/>
                    <Route path="party" element={<SecondaryGuests />}/>
                    <Route path="menu" element={<MenuSelection />}/>
                </Route>
                <Route
                    path="/thankyou"
                    element={<Success />}
                />
            </>
        )
    );
};

const App = () => {
    if (comingSoon)
        return <ComingSoon/>;

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistStore(store)}>
                <RouterProvider router={makeRouter()} />
            </PersistGate>
        </Provider>
    );
};

export default App;