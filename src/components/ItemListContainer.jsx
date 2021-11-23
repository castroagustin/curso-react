import '../scss/ItemListContainer.scss'
import ItemList from './ItemList';
import { useEffect } from 'react';
import Spinner from './Spinner';

const ItemListContainer = ({ data, setCurrentProd }) => {

    useEffect(() => {
    }, [])

    return (
        <section className='itemListContainer'>
            {data ? <ItemList items={data} setCurrentProd={setCurrentProd} /> : <Spinner />}
        </section>
    );
}

export default ItemListContainer;