import { useEffect } from 'react';
import '../scss/ItemDetail.scss';

const ItemDetail = ({ item }) => {
    useEffect(() => { console.log(item) })
    const { title, author, price, category, description, pictureUrl } = item;
    return (
        <>
            <img className='itemDetail__img' src={`../assets/${pictureUrl}`} alt={title}></img>
            <div className='itemDetail__textContainer'>
                <h2 className='itemDetail__title'>{title}</h2>
                <div className='itemDetail__details'>
                    <span className='itemDetail__author'>{author}</span>
                    <span className='itemDetail__circle' />
                    <span className='itemDetail__category'>{category}</span>
                </div>
                <h3 className='itemDetail__price'>${price}</h3>
                <span className='itemDetail__description'>{description}</span>
            </div>
        </>
    )
}

export default ItemDetail;