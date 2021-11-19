import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';
import '../scss/ItemDetail.scss';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    useEffect(() => {
        getItem();
    }, [])

    const getItem = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    setItem(JSON.parse(localStorage.getItem('products'))[0])
                )
            }, 2000)
        })
    }

    return (
        <section className='itemDetail'>
            {item ? <ItemDetail item={item} /> : <Spinner />}
        </section>
    )
}

export default ItemDetailContainer;