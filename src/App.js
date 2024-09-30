import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Menu from './components/Menu';
import BookingForm from './components/BookingForm';

const App = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-white">
                <Navbar />
                <div className="col-lg-12 mb-5">
                    <Carousel />
                </div>
                <div className="col-lg-12 mb-5">
                    <Menu />
                </div>
                <div className="col-lg-12">
                    <BookingForm />
                </div>
            </div>
        </>
    );
};

export default App;
