import { LOGO_IMG_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo-img" src={LOGO_IMG_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart 1</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;