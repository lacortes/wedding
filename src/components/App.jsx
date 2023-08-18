import '../styles/style.css';
import ComingSoon from './ComingSoon';
import WeddingApp from './WeddingApp';

const comingSoon = true;
const App = () => {
    return (
        comingSoon ? <ComingSoon /> : <WeddingApp />
    );
};

export default App;