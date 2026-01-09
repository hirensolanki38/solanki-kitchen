import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Title = () => {
    return (
        <h1>Solanki's Kitchen</h1>
    )
};

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <Title />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
            This is Body !!
        </div>
    )
};

const Footer = () => {
    return (
        <div className="footer">
            This is Footer !!
        </div>
    )
};

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