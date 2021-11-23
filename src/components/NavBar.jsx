import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import '../scss/NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = ({ setCurrentCategory }) => {
    return (
        <nav className='navBar'>
            <ul className='navBar__menu' >
                <li><a href="/">Inicio</a></li>
            </ul>
            <ul className='navBar__menu navBar__menu--categories' >
                <Link to='/categorias/Autoayuda' onClick={() => setCurrentCategory('Autoayuda')}>Autoayuda</Link>
                <Link to='/categorias/Economía' onClick={() => setCurrentCategory('Economía')}>Economía</Link>
                <Link to='/categorias/Ficción' onClick={() => setCurrentCategory('Ficción')}>Ficción</Link>
            </ul >
            <div className='navBar__iconsContainer'>
                <div className="navBar__search">
                    <FontAwesomeIcon
                        className='navBar__searchIcon'
                        icon={faSearch} />
                    <input type='text' className='navBar__searchInput' placeholder='Buscar...' />
                </div>
                <div className='navBar__cartContainer'>
                    <span className='cart__badge'>4</span>
                    <FontAwesomeIcon
                        className='navBar__cartIcon'
                        icon={faShoppingCart} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;