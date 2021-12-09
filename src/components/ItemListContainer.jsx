import '../scss/ItemListContainer.scss'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Spinner from './Spinner';
import { useParams } from 'react-router';

const ItemListContainer = () => {
    const [products, setProducts] = useState(null);

    const { categoryName } = useParams();

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, 'items');

        categoryName ?
            getDocs(query(itemsCollection, where('category', '==', categoryName))).then(snapshot => {
                setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }) :
            getDocs(itemsCollection).then(snapshot => {
                setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            })

    }, [categoryName])

    console.log(products)
    return (
        <section className='itemListContainer'>
            {products ? <ItemList items={products} /> : <Spinner />}
        </section>
    );
}

export default ItemListContainer;