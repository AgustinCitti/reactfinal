import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ itemsList }) => {
  
    return(
        <div className="containerProductos">
        {itemsList.map((producto) => {
            return (
                <Item className="tarjetaProducto" 
                producto={producto}
                key={producto.id}
                />
            )
        })}
        </div>
    )
} 

export default ItemList;