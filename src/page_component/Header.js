import { useNavigate } from 'react-router-dom';

export default function NavComponent() {
    const navigate = useNavigate();

    const navSignIn = () => {
        navigate('/SignIn');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-success">
                <div className="container-fluid px-5">
                    <a href="#" className="navbar-brand">
                        <span className="fw-bold text-light">CODEOFLIVES</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#main-nav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end align-center"
                        id="main-nav"
                    >
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="btn btn-outline-light"
                                    onClick={navSignIn}
                                >
                                    Sign In
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
