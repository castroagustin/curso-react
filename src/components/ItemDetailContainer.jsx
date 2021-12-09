import ItemDetail from './ItemDetail';
import Spinner from './Spinner';
import '../scss/ItemDetail.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { doc, getDoc, getFirestore } from '@firebase/firestore';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { itemId } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, 'items', itemId);
        getDoc(itemRef).then(snapshot => {
            if (snapshot.exists()) {
                setProduct({ id: snapshot.id, ...snapshot.data() })
            }
        })
    }, [itemId])
    return (
        <section className='itemDetail'>
            {product ? <ItemDetail item={product} /> : <Spinner />}
        </section>
    )
}

export default ItemDetailContainer;