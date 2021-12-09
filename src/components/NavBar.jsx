import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../scss/NavBar.scss';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <ul className='navBar__menu' >
                <li><a href="/">Inicio</a></li>
            </ul>
            <ul className='navBar__menu navBar__menu--categories' >
                <Link to='/categorias/Autoayuda'>Autoayuda</Link>
                <Link to='/categorias/Economía'>Economía</Link>
                <Link to='/categorias/Ficción'>Ficción</Link>
            </ul >
            <div className='navBar__iconsContainer'>
                <div className="navBar__search">
                    <FontAwesomeIcon
                        className='navBar__searchIcon'
                        icon={faSearch} />
                    <input type='text' className='navBar__searchInput' placeholder='Buscar...' />
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;