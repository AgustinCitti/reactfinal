import logo from '../logo.svg';
import logo2 from '../components/img/logo2.png'
import './style.css';
import carrito from './img/carrito.png'
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='navbarCont'>
            <Link to="/"><img width={'100px'} src={logo2}/></Link>
            <div>
                <ul className='navbarText'>
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/category/cervezaFuerte">Fuertes</NavLink>
                    <Link to="/category/cervezaLiviana">Livianas</Link>
                </ul>
            </div>
            <CartWidget/>
        </div>
    );
}

export default NavBar;