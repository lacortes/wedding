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
                </Route>
            </>
        )
    );
};

const App = () => {
    if (comingSoon)
        return <ComingSoon/>;

    return (
        <Provider store={store}>
            <RouterProvider router={makeRouter()} />
        </Provider>
    );
};

export default App;