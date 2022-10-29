
import { isDisabled } from '@testing-library/user-event/dist/utils';
import react,{ useState } from 'react';


const ItemCount = ({stock,initial,onAdd}) =>{
    const [contador,setContador]=useState(1);
    const resta = () => {
        setContador(contador - 1);

    }
    const suma = () => {
        setContador(contador + 1);
    }
    return(
       
        <div>

            
            <h5>La cantidad de stock que tenemos es de {stock}</h5>
            <p>{contador}</p>
           
            <button disabled={contador <= initial} onClick={resta}>-</button>
            <button disabled={contador >= stock} onClick={suma}>+</button>
            <div>
                <button disabled={stock === 0} onClick={()=> onAdd(contador)}> Agregar al Carrito</button>
            </div>
        </div>
    );
}
export default ItemCount;

