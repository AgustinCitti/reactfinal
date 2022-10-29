import ItemDetail from '../ItemDetail/ItemDetail';
import react, { useEffect, useState } from 'react';
import info from '../Data/async-mock.js';
import { useParams } from 'react-router-dom';
import {db} from "../../utils/firebase"
import {doc, getDoc} from "firebase/firestore";



export const ItemDetailContainer = () => {

    const {productId} = useParams();
    const [item,setItem] = useState({});


    useEffect(()=>{
        const getProducto = async() =>{
            const queryRef = doc(db,"Items",productId)
            const  response = await getDoc(queryRef);
            const newItem = {
                id:response.id,
                ...response.data()
            }
            setItem(newItem)
        }
        getProducto();
    },[productId])

    return(
        <div>
            <ItemDetail item={item}></ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;