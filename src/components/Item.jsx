import '../scss/Item.scss'

const Item = ({ item }) => {
    return (
        <div className='item'>
            <div className='item__imgContainer'>
                <img className='item__img' src={`assets/${item.pictureUrl}`} alt={item.title}></img>
            </div>
            <div className='item__details'>
                <span className='item__text'>{item.title}</span>
                <div className='item__rating'></div>
                <span className='item__text'>{`$${item.price}`}</span>
                <span className='item__secondaryText'>{item.category}</span>
            </div>
            <span className='item__addToCart'>Agregar al carrito</span>
        </div>
    )
}

export default Item;