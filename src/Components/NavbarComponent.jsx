import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.scss'
import { useState, useEffect, } from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const closeNav = () => {
        setShowNav(false);
    };
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const navigate = useNavigate();

    const navigateToMesProjets = () => {
        navigate('/mesprojets');
    };
    const navigateToCv = () => {
        navigate('/cv');
    };
    const navigateToContact = () => {
        navigate('/contact');
    };

    return (
        <nav className="navbar">
            <div className='menu-grid'>
                <div className='logo-menu' onClick={() => setShowNav(!showNav)}>
                    <div className='logo-home'></div>
                    <h5 className='h5-menu'>MENU</h5>
                    <h5 className='click'>Click on me !</h5>
                </div>
                <ul className={`nav-list ${showNav ? 'show' : ''} ${isLoaded ? 'loaded' : ''}`}>
                    <li><Link to='/accueil' data-text='ACCUEIL' onClick={closeNav}>Accueil</Link></li>
                    <li><Link to='/mesprojets' data-text='MES PROJETS' onClick={closeNav}>Mes Projets</Link></li>
                    <li><Link to='/cv' data-text='CV' onClick={closeNav}>CV</Link></li>
                    <li><Link to='/contact' data-text='CONTACT' onClick={closeNav}>Contact</Link></li>
                </ul>
                <div className='projet-button' onClick={navigateToMesProjets}>
                    <Link to='/accueil'></Link>
                </div>
                <div className='cv-button' onClick={navigateToCv}>
                </div>
                <div className='contact-button' onClick={navigateToContact}>
                </div>
                <div className='theme-button'>
                    <div className='theme' onClick={toggleTheme}></div>

                </div>
            </div>
        </nav>
    );
}
export default Navbar;