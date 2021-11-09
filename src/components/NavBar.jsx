import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import '../scss/NavBar.scss';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <ul className='navBar__menu' >
                <li><a href="./">Inicio</a></li>
                <li><a href="./">Categorias</a></li>
                <li><a href="./">Quienes somos</a></li>
                <li><a href="./">Contacto</a></li>
            </ul>
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