import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({producto}) => {
    return(
        <div>
            <img height='300px' src={producto.image}></img>
            <h3>{producto.name}</h3>
            <p>${producto.price}</p>
            <p>{producto.description}</p>
            <Link to={`/item/${producto.id}`}>
                <button className="verDetalle">Ver detalle...</button>
            </Link>
            <p>------------------------------------------------------------------</p>
        </div>
    )
};


export default Item;