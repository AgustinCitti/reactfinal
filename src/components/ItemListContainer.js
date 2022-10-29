import react from 'react'
import ItemCount from '../components/ItemCount.js';
import info from './Data/async-mock';
import ItemList from './ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {db} from "../utils/firebase"
import { collection, getDocs, query, where } from 'firebase/firestore';
const ItemListContainer = ({nombresProductos,contenido}) => {

    const {categoryId} =  useParams();
    const [Items,setItems]= useState([]);

    useEffect( () => {
        const queryRef = !categoryId ? collection(db, "Items") : query(collection(db,"Items"),where("category","==",
        categoryId));
       
        getDocs(queryRef).then(response =>{
            const resultados = response.docs.map(doc => {
                const newItem = {
                    id:doc.id,
                    ...doc.data()
                }
                return newItem
            });
            setItems(resultados);
        })
    }, [categoryId])
        
    return(
        
        <div>
            <h3>{nombresProductos}</h3>
            <p>{contenido}</p>

            <h2 className='titulo'>¡Probá nuestras latas!</h2>
            <ItemList itemsList={Items} />

        </div>
    );
};


export default ItemListContainer;