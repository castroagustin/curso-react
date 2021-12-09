import Item from "./Item";
import '../scss/ItemList.scss'
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {

    return (
        <section className='itemList'>
            {items?.map(item => {
                return (
                    <Link to={`/item/${item.id}`} className='item' key={item.id} >
                        <Item item={item} />
                    </Link>
                )
            })}
        </section>
    )
}

export default ItemList;