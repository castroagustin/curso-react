import '../scss/ItemListContainer.scss'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';

const ItemListContainer = () => {

    useEffect(() => {
        getData('JSON/booksData.json');
    }, [])

    const [data, setData] = useState([]);
    const getData = (dataSrc) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    fetch(dataSrc)
                        .then(res => res.json())
                        .then(res => setData(res))
                )
            }, 2000)
        })
    }

    return (
        <section className='itemListContainer'>
            <ItemList items={data} />
        </section>
    );
}

export default ItemListContainer;