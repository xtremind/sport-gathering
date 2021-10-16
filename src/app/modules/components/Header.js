import logo from "../../assets/icon-scheduler.webp";
import './Header.css'

function Header(){
    return (
        <header className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <h1>
                        <img src={logo} alt="" width="50" height="50" className="d-inline-block"/>
                        <span>Sport Poll</span>
                    </h1>
                    <p className="visually-hidden" id="version"></p>
                </a>
            </div>
        </header>
    );
}

export default Header;