import React from "react";
import ReactDOM from "react-dom/client";
import Title from "./components/Title";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            
            {/* Body */}
            <Body />

            {/* Footer */}
            <Footer />
        </div>
    )
};

root.render(<AppLayout />);