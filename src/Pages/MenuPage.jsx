import { Link } from 'react-router-dom';
import '../Styles/Menu.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to='/accueil'>Accueil</Link></li>
                <li><Link to='/cv'>CV</Link></li>
                <li><Link to='/mesprojets'>Mes Projets</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;

