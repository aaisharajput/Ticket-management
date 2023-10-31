import styles from './style.module.css'
import getRoute from "../../server";
import { Link } from 'react-router-dom';

export default function MenuBar() {
    const user=JSON.parse(localStorage.getItem('tokenDetails'));
    return (
        <>
            <div className={`${styles.nav} col-2 col-md-2`}>
                <nav className='navbar'>
                    <ul className={`${styles.ul} navbar-nav`}>
                        <li className="nav-item text-center pt-5">
                            <h3>Welcome</h3>
                            <img src={getRoute("/default.svg")} alt="Avatar Logo" style={{ width: "70px" }} className="rounded-pill p-0" />
                            <br/><h5>{user.username}</h5>
                        </li>
                        <li className='navbar-item'><Link to="/home">Home</Link></li>
                        <li className='navbar-item'><Link to="/home">Create Ticket</Link></li>
                        <li className='navbar-item'><Link to="/home">My Tickets</Link></li>
                        <li className='navbar-item'><Link to="/home">Assigned Ticket</Link></li>
                        <li className='navbar-item'><Link to="/home">Profile</Link></li>
                        <li className='navbar-item'><Link to="/change_password">Change Password</Link></li>
                    </ul>

                </nav>
            </div>
        </>
    )
}