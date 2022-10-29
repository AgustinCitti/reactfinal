import React, { useState }  from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [productCartList, setProductCartList] = useState([]);


    const isInCart = (productId) =>{
        const productExist = productCartList.some(item=>item.id == productId)
        return productExist;
    }

    const addItem = (item,quantity) =>{

        const newProduct = {
            id:item.id,
            nombre:item.name,
            precio: item.price,
            imagen:item.image,
            quantity
        }
        if(isInCart(item.id)){
            const productPos = productCartList.findIndex(product => product.id === item.id);
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity =  newArreglo[productPos].quantity + quantity;
            newArreglo[productPos].quantityPrice = newArreglo[productPos].quantity * newArreglo[productPos].precio;
            setProductCartList(newArreglo);
        } else{
            const newArreglo = [...productCartList];     
            newProduct.quantityPrice = newProduct.quantity * newProduct.precio;
            newArreglo.push(newProduct);
            setProductCartList(newArreglo)
            //setProductCartList([...productCartList,newProduct])
        }

    }
    const removeItem = (itemId)  => {
        const newArreglo = productCartList.filter(producto => producto.id !== itemId);
        setProductCartList(newArreglo)
    }

    const clearCarrito = () =>{
        setProductCartList([]);
    } 

    const totalPrecio = () =>{
        const totalPrice = productCartList.reduce((acc,item)=> acc + item.quantityPrice,0);
        return totalPrice;
    }  

    const totalProductos= () => {
        const totalProducts = productCartList.reduce((acc,item)=> acc + item.quantity,0);
        return totalProducts;
    }
    return(
        <CartContext.Provider value=
        {{productCartList , addItem, removeItem ,isInCart,clearCarrito,totalPrecio,totalProductos}}>
            {children}
        </CartContext.Provider>
    )
}




export default CartProvider;

