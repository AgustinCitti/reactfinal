import React,{useContext,useState} from "react";
import { CartContext } from "../../Context/CartContext";
import {Link} from 'react-router-dom'
import {db} from '../../utils/firebase';
import { collection, addDoc, doc , updateDoc, getFirestore } from "firebase/firestore"
import "./CartContainer.css"
import { clear } from "@testing-library/user-event/dist/clear";

export const CartContainer = () => {
    const {productCartList, removeItem, clearCarrito,totalPrecio} = useContext(CartContext);
    const  [idOrder, setIdOrder] = useState("");
    //console.log(productCartList)
    const sendOrder = (event) =>{
        event.preventDefault();
        const order = {buyer: 
            {name: event.target[0].value, 
            phone: event.target[1].value,
            email: event.target[2].value}, 
            items : productCartList, 
            total: totalPrecio()
        };
        console.log("order",order) 


        const queryRef = collection(db, "orders");

        addDoc(queryRef, order).then(response=>{
            console.log("response",response)
            setIdOrder(response.id)
            clearCarrito();
        });

    }



    const updateOrder = () => {
        const queryRef = doc(db,"orders","5DXwxooDTFtERSKKvi8n");

        updateDoc(queryRef,{
            
        }).then(response=>console.log(response))
    }


    return(
        <div>
            <h1>Pedido:</h1>
            {idOrder &&  <p> su orden fue creada, id {idOrder}</p>} 
            {
                productCartList.length > 0 ?
                <div> 
                    <div className="containerTarjetas"> 
                        {productCartList.map(item=>(
                            <div className="tarjetaCarrito">
                                <p>{item.nombre} </p>
                                <p>Cantidad : {item.quantity}</p>
                                <p>Precio Unitario: ${item.precio}</p>
                                <p>Precio Productos: ${item.quantityPrice}</p>
                                <img style={{height:"100px"}} src={item.imagen}></img>
                        
                                <button onClick={()=>removeItem(item.id)}> eliminar del pedido</button>
                                
                            </div>
                        ))}
                    </div>
                    <div>
                        <button onClick={clearCarrito}>Vaciar el carrito</button>
                        <h5>El precio total es de: ${totalPrecio()}</h5>
                        <p>------------------------------------------------------------------------------------</p>
                    </div>
                    <form className="formulario" onSubmit={sendOrder}>
                        <h4>Completa este formulario para enviar tu compra</h4>
                        <label style={{padding:"6px",}}>Nombre:</label>
                        <input  type="text" ></input>
                        <label style={{padding:"6px",}}>Numero de telefono:</label>
                        <input type="text"></input>
                        <label style={{padding:"6px",}}>Correo electronico:</label>
                        <input type="email"></input>
                        <button type="submit" className="botonEnviar" >Confirmar pedido</button>
                    </form>
                    <button onClick={updateOrder}>actualizar pedido</button>
                </div>
                :
                <p>El pedido esta vacio ¡<Link to="/">Agrega un producto</Link>!</p>

            }

        </div>
    )

}


export default CartContainer;