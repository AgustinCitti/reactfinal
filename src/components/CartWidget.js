import react from 'react'
import { Link } from 'react-router-dom';
import carrito from './img/carrito.png'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Imagen = () => {

    const {totalProductos} = useContext(CartContext);


    return(
        <div>
            <Link to="/cart"><img height={'50px'} width={'50px'} src={carrito}></img></Link>
            <span style={{backgroundColor:"white",borderRadius:"50px",width:'10px',height:'10px',fontSize:'10px',color:'black'}}>{totalProductos()}</span>
        </div>
        
    );
};

export default Imagen;
