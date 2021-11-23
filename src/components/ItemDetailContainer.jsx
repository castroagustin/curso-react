import ItemDetail from './ItemDetail';
import Spinner from './Spinner';
import '../scss/ItemDetail.scss';

const ItemDetailContainer = ({ currentProd }) => {
    return (
        <section className='itemDetail'>
            {currentProd ? <ItemDetail item={currentProd} /> : <Spinner />}
        </section>
    )
}

export default ItemDetailContainer;