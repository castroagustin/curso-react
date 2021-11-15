import Item from "./Item";
import '../scss/ItemList.scss'

const ItemList = ({ items }) => {
    return (
        <section className='itemList'>
            {items.map(item => <Item item={item} key={item.id} />)}
        </section>
    )
}

export default ItemList;