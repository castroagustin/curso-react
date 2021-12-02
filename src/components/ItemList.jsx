import Item from "./Item";
import '../scss/ItemList.scss'
import { Link } from 'react-router-dom';

const ItemList = ({ items, setCurrentProd }) => {

    return (
        <section className='itemList'>
            {items?.map(item => {
                return (
                    <Link to={`/item/${item.id}`} className='item' key={item.id} onClick={() => setCurrentProd(item)}>
                        <Item item={item} key={item.id} />
                    </Link>
                )
            })}
        </section>
    )
}

export default ItemList;