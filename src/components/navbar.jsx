import menu from '../images/menu_icon.png'
import logo from '../images/logo_icon.png'

const Navbar = () =>{
    return(
        <nav className="navbar">
            <img src={menu} alt="Menu" />
            <img src={logo} alt="ThoughtNook Logo" />
            <h2>ThoughtNook</h2>
            <input type="text" placeholder='Search anything' />
            <button>Search</button>
            <button className="signin">Sign In</button>
        </nav>
    )
}
export default Navbar;