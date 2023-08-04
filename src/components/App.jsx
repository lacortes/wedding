import '../styles/style.css';
import NavBar from './NavBar';

const App = () => {
    return (
        <>
            <NavBar />
            <section className="w-full h-full">
                <div
                    className="w-full h-screen bg-black bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3269&q=80)' }}
                >
                    <div className="w-full h-full flex-col flex gap-y-5 justify-center items-center backdrop-brightness-50">
                        <h1 className="text-white text-6xl font-dancing-script md:text-9xl">Luis &amp; Karly</h1>
                        <p className="mt-3 md:mt-10 text-white text-4xl font-dancing-script md:text-6xl">November 2023</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default App;