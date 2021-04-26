import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse ubuntu" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link ubuntu headerLink" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ubuntu headerLink" to="/privacy">Privacy Policy</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ubuntu headerLink" href="https://github.com/cloudvelde" target="_blank" rel="noreferrer">Open Source</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
